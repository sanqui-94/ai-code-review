import type { Metadata } from "next";
import "./globals.css";
import AppSessionProvider from "@/components/AppSessionProvider";

export const metadata: Metadata = {
  title: "ai code reviewer",
  description: "review your snippets of code with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col"
      >
        <AppSessionProvider>
          {children}
        </AppSessionProvider>
      </body>
    </html>
  );
}
