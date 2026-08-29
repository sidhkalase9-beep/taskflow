import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Back to TaskFlow
        </Link>

        <h1 className="mt-10 text-4xl font-bold">
          About TaskFlow
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          TaskFlow is a simple productivity tool designed to help you
          organize tasks, set priorities, manage deadlines, and keep track
          of your progress.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Simple by design
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">
          TaskFlow focuses on the essentials of task management without
          requiring an account or complicated setup.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Free to use
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">
          TaskFlow is designed to be free to use. Your tasks are stored
          locally in your browser so you can start organizing without
          creating an account.
        </p>

        <Link
          href="/app"
          className="mt-10 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200"
        >
          Open TaskFlow
        </Link>
      </div>
    </main>
  );
}