import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return NextResponse.json(
      { error: "Missing GitHub authorization code" },
      { status: 400 }
    );
  }

  const storedState = request.cookies.get("github_oauth_state")?.value;

  if (!state || !storedState || state !== storedState) {
    return NextResponse.json(
      { error: "Invalid OAuth state" },
      { status: 400 }
    );
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "GitHub OAuth environment variables are missing" },
      { status: 500 }
    );
  }

  try {
    // Exchange GitHub code for access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error("GitHub token error:", tokenData);

      return NextResponse.json(
        { error: "Failed to authenticate with GitHub" },
        { status: 500 }
      );
    }

    const accessToken = tokenData.access_token;

    // Get GitHub user
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user");
    }

    const githubUser = await userResponse.json();

    // Get repositories
    const reposResponse = await fetch(
      "https://api.github.com/user/repos?sort=updated&per_page=100",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    const repos = reposResponse.ok ? await reposResponse.json() : [];

    /*
     * Temporary session data.
     *
     * For production, DO NOT store the GitHub access token
     * directly in a browser cookie. Store it securely server-side.
     */
    const userData = {
      id: githubUser.id,
      login: githubUser.login,
      name: githubUser.name,
      avatar_url: githubUser.avatar_url,
      email: githubUser.email,
      repos: repos.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        private: repo.private,
        html_url: repo.html_url,
        default_branch: repo.default_branch,
        language: repo.language,
      })),
    };

    // IMPORTANT:
    // Always send the user to the Codespaces app URL.
    const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  new URL(request.url).origin;

const response = NextResponse.redirect(
  new URL("/dashboard", appUrl)
);

    response.cookies.set("github_user", JSON.stringify(userData), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    response.cookies.delete("github_oauth_state");

    return response;
  } catch (error) {
    console.error("GitHub OAuth error:", error);

    return NextResponse.json(
      { error: "GitHub authentication failed" },
      { status: 500 }
    );
  }
}