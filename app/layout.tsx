import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskFlow — Simple Free Task Manager",

  description:
    "TaskFlow is a simple and free task manager that helps you organize tasks, manage priorities, track deadlines, and stay productive.",

  keywords: [
    "TaskFlow",
    "task manager",
    "free task manager",
    "todo app",
    "to-do list",
    "productivity app",
    "task management",
  ],

  authors: [{ name: "TaskFlow" }],
  creator: "TaskFlow",
  applicationName: "TaskFlow",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "WKwuVibPNps2f44JxehbJ10mog5eskEab3E1eaRJ_Yw",
  },

  openGraph: {
    title: "TaskFlow — Simple Free Task Manager",
    description:
      "A simple and free task manager for organizing your work and staying productive.",
    type: "website",
    siteName: "TaskFlow",
  },

  twitter: {
    card: "summary",
    title: "TaskFlow — Simple Free Task Manager",
    description:
      "A simple and free task manager for organizing your tasks and staying productive.",
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