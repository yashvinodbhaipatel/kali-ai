import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: "GITHUB_CLIENT_ID is missing" },
      { status: 500 }
    );
  }

  const state = crypto.randomBytes(32).toString("hex");

  const callbackUrl =
    process.env.GITHUB_CALLBACK_URL ||
    "https://special-chainsaw-5j4p9969gg6f45jw-3000.app.github.dev/api/github/callback";

  const githubUrl = new URL(
    "https://github.com/login/oauth/authorize"
  );

  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", callbackUrl);
  githubUrl.searchParams.set("scope", "read:user user:email repo");
  githubUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(githubUrl);

  response.cookies.set("github_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return response;
}