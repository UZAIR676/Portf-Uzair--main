import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " uzair.dev",
  description: "Portfolio website showcasing my projects and skills as a full-stack developer",
  icons: {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEZKXbu76czE7aU6Fpk8Bpo5_ZdJDjqDhuA&s", // Browser tab icon
    apple: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEZKXbu76czE7aU6Fpk8Bpo5_ZdJDjqDhuA&s", // Apple devices
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <style>
          {`
            link[rel="icon"] {
              border-radius: 100%;  /* Round the favicon */
            }
          `}
        </style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
