"use client";

import { useState } from "react";

export default function GitHubPage() {
  const [repoUrl, setRepoUrl] = useState("");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <div className="flex items-center gap-4">
          <a
            href="/dashboard"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
          >
            ←
          </a>

          <div>
            <p className="text-sm text-white/40">KALI AI</p>
            <h1 className="text-2xl font-semibold">
              Connect GitHub
            </h1>
          </div>
        </div>

        {/* Main card */}
        <div className="mx-auto mt-12 max-w-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0c] p-8 shadow-2xl">

            {/* GitHub icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-black">
              ●
            </div>

            <div className="mt-6 text-center">

              <h2 className="text-2xl font-semibold">
                Connect your GitHub
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
                Give KALI AI access to your repositories so it can
                understand your project and help you write better code.
              </p>

            </div>

            {/* GitHub OAuth */}
            <button
              onClick={() => {
                window.location.href = "/api/github/login";
              }}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              <span>●</span>
              Continue with GitHub
            </button>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-white/30">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Repository URL */}
            <div>

              <label className="text-sm font-medium">
                Public repository URL
              </label>

              <p className="mt-1 text-xs text-white/35">
                You can also import a public GitHub repository directly.
              </p>

              <div className="mt-4 flex gap-2">

                <input
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/user/project"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/20 focus:border-purple-500/50"
                />

                <button
                  disabled={!repoUrl.trim()}
                  className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Import
                </button>

              </div>

            </div>

          </div>

          {/* Permissions */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">

            <h3 className="font-medium">
              What KALI AI will do
            </h3>

            <div className="mt-5 space-y-4">

              <Permission text="Analyze repository structure" />
              <Permission text="Read source code for AI context" />
              <Permission text="Understand dependencies and configuration" />
              <Permission text="Help debug and build features" />

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

function Permission({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/55">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-400">
        ✓
      </span>

      {text}
    </div>
  );
}
