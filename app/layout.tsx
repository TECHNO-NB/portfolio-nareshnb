
/* eslint-disable react/no-unescaped-entities */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naresh NB - Portfolio | MERN Stack Developer",
  description:
    "Hi, I'm Naresh NB (Naresh Bhattarai) — a passionate Software Engineer and MERN Stack Developer building modern web and mobile apps.",
  keywords: [
    "Naresh NB",
    "Naresh",
    "Naresh Bhattarai",
    "NB",
    "software developer",
    "software engineer",
    "django",
    "python",
    "javascript",
    "typescript",
    "web developer",
    "MERN Developer",
    "Portfolio",
    "Full Stack Developer",
    "react native",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
  ],
  authors: [{ name: "Naresh Bhattarai", url: "https://nareshnb.com" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "nblogo.png",
  },
  openGraph: {
    title: "Naresh NB - Portfolio | MERN Stack Developer",
    description:
      "Explore the portfolio of Naresh Bhattarai (Naresh NB) — Software Engineer & MERN Stack Developer skilled in React, Node.js, MongoDB, Express, Django, and Python.",
    url: "https://nareshnb.com",
    siteName: "Naresh NB Portfolio",
    images: [
      {
        url: "/naresh.jpg",
        width: 1200,
        height: 630,
        alt: "Naresh NB Portfolio - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#7127BA"/>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
