import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/landing"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to TaskFlow
        </Link>

        <h1 className="mt-10 text-4xl font-bold">
          Contact TaskFlow
        </h1>

        <p className="mt-4 text-lg leading-8 text-zinc-400">
          Have a question, suggestion, or found a problem with TaskFlow?
          We'd love to hear from you.
        </p>

        <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            Get in touch
          </h2>

          <p className="mt-3 leading-7 text-zinc-400">
            For questions, feedback, or support, contact us by email.
          </p>

          <a
            href="mailto:workwithsnoob@gmail.com"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Email TaskFlow
          </a>

          <p className="mt-4 text-sm text-zinc-600">
            Email us at workwithsnoob@gmail.com for questions,
            feedback, or support.
          </p>

        </section>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/about"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/privacy"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            Terms of Service
          </Link>

          <Link
            href="/app"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Open TaskFlow
          </Link>

        </div>

      </div>
    </main>
  );
}