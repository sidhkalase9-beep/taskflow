import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* NAVBAR */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/landing" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-bold text-black">
            ✓
          </div>

          <span className="text-2xl font-bold">TaskFlow</span>
        </Link>

        <Link
          href="/app"
          className="rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
        >
          Open App
        </Link>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 text-center">
        <div className="mx-auto mb-8 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
          Simple. Fast. Free.
        </div>

        <h1 className="mx-auto max-w-5xl text-6xl font-black tracking-tight sm:text-7xl">
          Get things done.
          <br />
          <span className="text-zinc-600">Without the clutter.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          TaskFlow is a simple and powerful to-do list that helps you
          organize your day, prioritize your work, manage deadlines, and
          stay productive.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/app"
            className="rounded-xl bg-white px-8 py-5 text-lg font-bold text-black transition hover:bg-zinc-200"
          >
            Start Organizing →
          </Link>

          <a
            href="#features"
            className="rounded-xl border border-zinc-800 px-8 py-5 text-lg font-bold text-white transition hover:bg-zinc-900"
          >
            See Features
          </a>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Today's Tasks</h2>

                <p className="mt-2 text-zinc-500">
                  Stay focused and productive.
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900 px-5 py-3 text-sm text-zinc-400">
                3 tasks
              </div>
            </div>

            <div className="space-y-4">
              {/* TASK 1 */}
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                  ✓
                </div>

                <div className="flex-1">
                  <p className="font-semibold line-through text-zinc-500">
                    Finish assignment
                  </p>

                  <span className="text-sm text-zinc-600">
                    Completed
                  </span>
                </div>
              </div>

              {/* TASK 2 */}
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="h-7 w-7 rounded-full border border-zinc-600" />

                <div className="flex-1">
                  <p className="font-semibold">Study JavaScript</p>

                  <span className="text-sm text-zinc-500">
                    High Priority
                  </span>
                </div>
              </div>

              {/* TASK 3 */}
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="h-7 w-7 rounded-full border border-zinc-600" />

                <div className="flex-1">
                  <p className="font-semibold">Go to the gym</p>

                  <span className="text-sm text-zinc-500">
                    Medium Priority
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TASKFLOW WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            How TaskFlow Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Stay organized with a simple workflow designed to help you
            focus on what matters.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <HowItWorks
            number="01"
            title="Create a task"
            description="Add anything you need to accomplish. Give your task a priority and category so it is easy to organize."
          />

          <HowItWorks
            number="02"
            title="Set a deadline"
            description="Add a due date to important tasks and quickly see what is coming up or what needs your attention."
          />

          <HowItWorks
            number="03"
            title="Track your progress"
            description="Complete tasks as you finish them and use your progress overview to see how much you've accomplished."
          />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Everything you need
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Simple productivity.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            No complicated setup. No unnecessary features. Just a clean
            workspace for getting things done.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon="✓"
            title="Task Management"
            description="Create, complete, edit, and delete tasks quickly."
          />

          <Feature
            icon="!"
            title="Priorities"
            description="Mark important tasks with high, medium, or low priority."
          />

          <Feature
            icon="◷"
            title="Due Dates"
            description="Set deadlines and keep track of overdue tasks."
          />

          <Feature
            icon="⌕"
            title="Search"
            description="Find exactly what you need with instant task search."
          />

          <Feature
            icon="◉"
            title="Progress Tracking"
            description="See how much of your work you've completed."
          />

          <Feature
            icon="∞"
            title="Free to Use"
            description="Start organizing your tasks without creating an account."
          />
        </div>
      </section>

      {/* WHY TASKFLOW */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center sm:p-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Your tasks. Your way.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            TaskFlow gives you the tools you need to stay organized
            without overwhelming you with unnecessary complexity.
          </p>

          <Link
            href="/app"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-5 font-bold text-black transition hover:bg-zinc-200"
          >
            Start Organizing →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">TaskFlow</p>

              <p className="mt-1 text-sm text-zinc-600">
                Simple productivity for everyone.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
              <Link
                href="/app"
                className="transition hover:text-white"
              >
                Open App
              </Link>

              <a
                href="#features"
                className="transition hover:text-white"
              >
                Features
              </a>

              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-6 text-center text-sm text-zinc-700">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* HOW IT WORKS CARD */

function HowItWorks({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-zinc-700">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-500">
        {description}
      </p>
    </div>
  );
}

/* FEATURE CARD */

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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-zinc-700">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-black">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-500">
        {description}
      </p>
    </div>
  );
}