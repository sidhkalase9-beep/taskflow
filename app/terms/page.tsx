import Link from "next/link";

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Last updated: August 29, 2026
        </p>

        <section className="mt-10 space-y-8 text-zinc-400">
          <div>
            <h2 className="text-2xl font-bold text-white">
              1. Acceptance of Terms
            </h2>

            <p className="mt-3 leading-7">
              By using TaskFlow, you agree to these Terms of Service.
              If you do not agree with these terms, please do not use
              the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              2. Use of TaskFlow
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow is provided as a productivity and task-management
              tool. You may use it to create, organize, manage, and
              complete your personal tasks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              3. Your Tasks
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow stores tasks locally in your browser. You are
              responsible for maintaining your own device and browser
              environment and for any information you enter into the
              application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              4. Availability
            </h2>

            <p className="mt-3 leading-7">
              We aim to keep TaskFlow available and functional, but we
              do not guarantee that the service will always be available,
              uninterrupted, or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              5. Advertising
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow may display advertisements provided by third-party
              advertising services. These advertisements may be selected
              according to the policies and technologies of the relevant
              advertising provider.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              6. Prohibited Use
            </h2>

            <p className="mt-3 leading-7">
              You agree not to misuse TaskFlow, interfere with its
              operation, attempt unauthorized access, or use the service
              for unlawful purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              7. Changes to the Service
            </h2>

            <p className="mt-3 leading-7">
              We may modify, update, suspend, or discontinue parts of
              TaskFlow at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              8. Disclaimer
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow is provided on an "as is" and "as available"
              basis. We make no guarantees regarding the accuracy,
              reliability, or uninterrupted operation of the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              9. Changes to These Terms
            </h2>

            <p className="mt-3 leading-7">
              These Terms of Service may be updated from time to time.
              Updated terms will be published on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              10. Contact
            </h2>

            <p className="mt-3 leading-7">
              If you have questions about these Terms of Service, please
              contact the TaskFlow team.
            </p>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
          >
            About
          </Link>

          <Link
            href="/privacy"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
          >
            Privacy Policy
          </Link>

          <Link
            href="/app"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Open TaskFlow
          </Link>
        </div>
      </div>
    </main>
  );
}