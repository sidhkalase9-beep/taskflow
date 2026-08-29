import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskFlow — Simple Free Task Manager",

  description:
    "TaskFlow is a simple, fast, and free task manager that helps you organize tasks, prioritize your work, manage deadlines, and stay productive.",

  keywords: [
    "TaskFlow",
    "task manager",
    "free task manager",
    "to-do list",
    "todo app",
    "productivity app",
    "task management",
    "daily task planner",
    "online task manager",
  ],

  authors: [
    {
      name: "TaskFlow",
    },
  ],

  creator: "TaskFlow",

  applicationName: "TaskFlow",

  generator: "Next.js",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TaskFlow — Simple Free Task Manager",

    description:
      "Organize your tasks, manage priorities, track deadlines, and stay productive with TaskFlow.",

    type: "website",

    siteName: "TaskFlow",
  },

  twitter: {
    card: "summary",
    title: "TaskFlow — Simple Free Task Manager",

    description:
      "A simple, fast, and free task manager for organizing your day.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}