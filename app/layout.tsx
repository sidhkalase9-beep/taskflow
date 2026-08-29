import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TaskFlow — Simple Free Task Manager",
    template: "%s | TaskFlow",
  },

  description:
    "TaskFlow is a simple and free task manager that helps you organize tasks, set priorities, manage deadlines, and stay productive.",

  keywords: [
    "task manager",
    "todo list",
    "to do list",
    "productivity",
    "task management",
    "free task manager",
    "online todo list",
    "TaskFlow",
  ],

  authors: [
    {
      name: "TaskFlow",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TaskFlow — Simple Free Task Manager",
    description:
      "Organize your tasks, manage priorities, track deadlines, and get things done with TaskFlow.",
    type: "website",
    siteName: "TaskFlow",
  },

  twitter: {
    card: "summary",
    title: "TaskFlow — Simple Free Task Manager",
    description:
      "A simple and free task manager for organizing your day.",
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