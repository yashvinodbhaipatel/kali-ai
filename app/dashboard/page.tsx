"use client";

import { useState } from "react";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-white/10 bg-[#080809] md:flex">

          <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white font-bold text-black">
              K
            </div>

            <span className="font-semibold">
              KALI AI
            </span>
          </div>

          <div className="p-4">

            <button className="flex w-full items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90">
              <span>＋</span>
              New Chat
            </button>

            <div className="mt-8">

              <p className="mb-3 px-2 text-xs font-medium uppercase tracking-wider text-white/30">
                Workspace
              </p>

              <SidebarItem icon="◈" text="Projects" />
              <SidebarItem icon="⌘" text="GitHub" />
              <SidebarItem icon="▱" text="Chat History" />

            </div>

            <div className="mt-8">

              <p className="mb-3 px-2 text-xs font-medium uppercase tracking-wider text-white/30">
                Tools
              </p>

              <SidebarItem icon="⚡" text="Code Agent" />
              <SidebarItem icon="◇" text="Models" />

            </div>

          </div>

          <div className="mt-auto border-t border-white/10 p-4">

            <SidebarItem icon="⚙" text="Settings" />

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600">
                Y
              </div>

              <div>
                <p className="text-sm font-medium">
                  Yash
                </p>

                <p className="text-xs text-white/40">
                  Developer
                </p>
              </div>
            </div>

          </div>
        </aside>

        {/* Main */}
        <section className="flex flex-1 flex-col">

          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">

            <div>
              <p className="text-sm text-white/40">
                Workspace
              </p>

              <h1 className="font-medium">
                KALI AI
              </h1>
            </div>

            <div className="flex items-center gap-3">

              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 sm:flex">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                AI Online
              </div>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600">
                Y
              </button>

            </div>

          </header>

          {/* Content */}
          <div className="flex flex-1 flex-col">

            <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">

              {/* Welcome */}
              <div className="mb-12 text-center">

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 text-xl font-bold shadow-lg shadow-purple-900/30">
                  K
                </div>

                <h2 className="text-3xl font-semibold tracking-tight">
                  What are we building today?
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/40">
                  Ask KALI to understand your code, build features,
                  explain errors, or debug your project.
                </p>

              </div>

              {/* Quick actions */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <QuickAction
                  icon="⌘"
                  title="Understand"
                  description="Analyze my project"
                />

                <QuickAction
                  icon="⚡"
                  title="Build"
                  description="Create a feature"
                />

                <QuickAction
                  icon="⌁"
                  title="Debug"
                  description="Find a bug"
                />

                <QuickAction
                  icon="◇"
                  title="Explain"
                  description="Explain my code"
                />

              </div>

              {/* Repository */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#0a0a0c] p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                      ⌘
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Connect your GitHub repository
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Give KALI context about your project.
                      </p>
                    </div>

                  </div>

                 <a
  href="/dashboard/github"
  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
>
  Connect
</a>

                </div>

              </div>

            </div>

            {/* Chat input */}
            <div className="border-t border-white/10 bg-[#070708] p-5">

              <div className="mx-auto max-w-4xl">

                <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-3 shadow-2xl">

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask KALI anything about your code..."
                    className="min-h-[70px] w-full resize-none bg-transparent p-2 text-sm text-white outline-none placeholder:text-white/25"
                  />

                  <div className="flex items-center justify-between border-t border-white/10 pt-3">

                    <div className="flex gap-2">

                      <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50 hover:bg-white/5">
                        ＋ Files
                      </button>

                      <a
  href="/dashboard/github"
  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50 hover:bg-white/5"
>
  GitHub
</a>

                    </div>

                    <button
                      disabled={!message.trim()}
                      className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Ask KALI →
                    </button>

                  </div>

                </div>

                <p className="mt-3 text-center text-[11px] text-white/20">
                  KALI AI can make mistakes. Review generated code before deploying.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

function SidebarItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <button className="mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white">
      <span className="w-5 text-center">
        {icon}
      </span>

      {text}
    </button>
  );
}

function QuickAction({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <button className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition hover:border-purple-500/30 hover:bg-white/[0.04]">

      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
        {icon}
      </div>

      <p className="text-sm font-medium">
        {title}
      </p>

      <p className="mt-1 text-xs text-white/35">
        {description}
      </p>

    </button>
  );
}