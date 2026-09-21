import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-bold">
              K
            </div>

            <span className="text-lg font-semibold tracking-tight">
              KALI AI
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#developers" className="hover:text-white">
              Developers
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </div>

          <button className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/10">
            Sign in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-28 text-center md:pt-36">
          <div className="mb-6 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            ✦ AI built for developers
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Your codebase.
            <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              Understood by AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            KALI AI understands your projects, analyzes your code, helps
            debug errors, and turns ideas into working software.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
              Start Building →
            </button>

            <button className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-medium transition hover:bg-white/10">
              Connect GitHub
            </button>
          </div>

          {/* AI Input Preview */}
          <div className="mt-20 w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b0b0d] p-3 text-left shadow-2xl shadow-purple-950/20">
            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <div className="mb-8 flex items-center gap-3 text-sm text-white/40">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                KALI AI is ready
              </div>

              <div className="text-lg text-white/40">
                Ask KALI to build, explain, or debug your code...
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40">
                    📎 Files
                  </span>

                  <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40">
                    GitHub
                  </span>
                </div>

                <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-500">
                  Ask KALI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-purple-400">
              BUILT FOR DEVELOPERS
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              More than a chatbot.
            </h2>

            <p className="mt-4 text-white/50">
              KALI AI is designed to understand projects, not just individual
              code snippets.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Feature
              icon="⌘"
              title="Understand your codebase"
              description="Connect a repository and let KALI analyze its structure, files, dependencies and code."
            />

            <Feature
              icon="⚡"
              title="Debug faster"
              description="Find errors, understand why they happen and generate practical fixes."
            />

            <Feature
              icon="◈"
              title="Build with AI"
              description="Turn your ideas into features while keeping your existing project architecture in context."
            />
          </div>
        </div>
      </section>

      {/* Developer section */}
      <section id="developers" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-purple-400">
              PROJECT INTELLIGENCE
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              Give KALI your repository.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Connect GitHub and let KALI work with the context of your
              project instead of treating every question as an isolated
              problem.
            </p>

            <button className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black">
              Connect GitHub →
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b0b0d] p-5 font-mono text-sm shadow-xl">
            <div className="mb-5 text-white/40">
              kali-ai / my-project
            </div>

            <div className="space-y-3 text-white/60">
              <div>📁 app</div>
              <div className="pl-5">📁 api</div>
              <div className="pl-5">📁 components</div>
              <div>📁 public</div>
              <div>📄 package.json</div>
              <div>📄 README.md</div>
              <div>📄 next.config.ts</div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <span className="text-purple-400">KALI</span>
              <span className="text-white/50">
                {" "}
                analyzed 127 files successfully.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Build software with KALI.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            Your next coding assistant starts here.
          </p>

          <button className="mt-8 rounded-xl bg-white px-7 py-3 font-medium text-black">
            Get Started →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-white/40">
          <span>© 2026 KALI AI</span>
          <span>Code Smarter. Build Faster.</span>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-purple-500/30 hover:bg-white/[0.04]">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-white/45">
        {description}
      </p>
    </div>
  );
}