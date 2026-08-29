import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Last updated: August 29, 2026
        </p>

        <section className="mt-10 space-y-8 text-zinc-400">
          <div>
            <h2 className="text-2xl font-bold text-white">
              1. Information We Collect
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow is designed to work without requiring you to create
              an account. Tasks you create are stored locally in your
              browser using browser storage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              2. How Your Tasks Are Stored
            </h2>

            <p className="mt-3 leading-7">
              Your task information is stored locally on your device.
              TaskFlow does not require you to submit your task list to
              our servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              3. Cookies and Advertising
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow may use third-party advertising services such as
              Google AdSense. These services may use cookies or similar
              technologies to provide and measure advertisements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              4. Third-Party Services
            </h2>

            <p className="mt-3 leading-7">
              Third-party services may collect information according to
              their own privacy policies. We recommend reviewing the
              privacy policies of those services for more information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              5. Children's Privacy
            </h2>

            <p className="mt-3 leading-7">
              TaskFlow is not intended to knowingly collect personal
              information from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              6. Changes to This Policy
            </h2>

            <p className="mt-3 leading-7">
              We may update this Privacy Policy from time to time.
              Changes will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              7. Contact
            </h2>

            <p className="mt-3 leading-7">
              If you have questions about this Privacy Policy, please
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