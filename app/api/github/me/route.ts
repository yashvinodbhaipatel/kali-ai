import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const githubUser = request.cookies.get("github_user")?.value;

  if (!githubUser) {
    return NextResponse.json({
      loggedIn: false,
      user: null,
    });
  }

  try {
    const user = JSON.parse(githubUser);

    return NextResponse.json({
      loggedIn: true,
      user,
    });
  } catch {
    return NextResponse.json({
      loggedIn: false,
      user: null,
    });
  }
}