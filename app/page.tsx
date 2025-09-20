
/* eslint-disable react/no-unescaped-entities */

"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Server,
  Rocket,
  Wrench,
  Cpu,
  Globe2,
} from "lucide-react";
import landingPagePic from "@/public/naresh.jpg";
import Image from "next/image";


export default function Home() {

    const [quality, setQuality] = useState(80); // default

  useEffect(() => {
    if (typeof navigator !== "undefined" && "connection" in navigator) {
      const connection = (navigator as any).connection;

      if (connection.saveData || connection.effectiveType.includes("2g")) {
        setQuality(40);
      } else if (connection.effectiveType.includes("3g")) {
        setQuality(60);
      } else if (connection.effectiveType.includes("4g")) {
        setQuality(80);
      } else {
        setQuality(100); // WiFi, 5G, or unknown fast network
      }
    }
  }, []);
  const skills = useMemo(
    () => [
      { name: "MongoDB", level: 90, icon: <Database className="size-5" /> },
      { name: "Express.js", level: 85, icon: <Server className="size-5" /> },
      { name: "React", level: 92, icon: <Code2 className="size-5" /> },
      { name: "Node.js", level: 88, icon: <Cpu className="size-5" /> },
      { name: "Next.js", level: 86, icon: <Globe2 className="size-5" /> },
      { name: "TypeScript", level: 84, icon: <Wrench className="size-5" /> },
      { name: "Tailwind", level: 90, icon: <Rocket className="size-5" /> },
      { name: "Docker", level: 70, icon: <Rocket className="size-5" /> },
    ],
    []
  );

  const projects = [
    {
      title: "Chat with PDF (AI)",
      description:
        "Upload a PDF and chat with it in real-time. Vector search, RAG pipeline, auth, and role-based dashboards.",
      stack: ["Next.js", "Node", "MongoDB", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1557812353-11628d8b7c47?q=80&w=1600&auto=format&fit=crop",
      repo: "#",
      demo: "#",
    },
    {
      title: "YouTube Clone (Full-Stack)",
      description:
        "Video streaming with chunked upload, comments, likes, search, subscriptions, and watch history.",
      stack: ["React", "Express", "MongoDB", "Cloudinary"],
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop",
      repo: "#",
      demo: "#",
    },
    {
      title: "Modern eCommerce + Admin",
      description:
        "Product, cart, checkout, orders, Stripe integration, inventory sync, and analytics dashboards.",
      stack: ["Next.js", "Node", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop",
      repo: "#",
      demo: "#",
    },
    {
      title: "Instagram Clone",
      description:
        "Real-time chat, stories, reels, notifications, and private messaging with scalable architecture.",
      stack: ["React", "Express", "Socket.IO", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      repo: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-indigo-500/60 selection:text-white">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
                MERN Dev
              </span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    className="hover:text-white transition"
                    href={href as string}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <GridGlow />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="inline-block size-2 animate-pulse rounded-full bg-emerald-400" />
                Available for freelance & full-time
              </p>
              <h1 className="text-4xl/tight font-bold sm:text-5xl/tight">
                Hi, I&apos;m{" "}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  Naresh B.
                </span>
                <br /> MERN Stack Developer
              </h1>
              <p className="mt-5 max-w-xl text-slate-300">
                I build fast, accessible, and scalable web apps end-to-end using
                MongoDB, Express, React/Next.js, and Node.js — with modern DX,
                clean architecture, and delightful UI.
              
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transition"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Download CV
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="group rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 inline-flex items-center gap-2"
                >
                  <Mail className="size-4 transition-transform group-hover:-rotate-6" />{" "}
                  Contact
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-slate-300">
                <a
                  className="hover:text-white"
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-5" />
                </a>
                <a
                  className="hover:text-white"
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-5" />
                </a>
                <div className="inline-flex items-center gap-2 text-xs">
                  <MapPin className="size-4" /> Kathmandu, Nepal
                </div>
                <div className="inline-flex items-center gap-2 text-xs">
                  <Phone className="size-4" /> +977-9767015834
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative -mt-10 md:mb-0 mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-fuchsia-500/10 p-2 shadow-2xl">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,.25),transparent_60%)]" />
                <Image
                  src={landingPagePic}
                  alt="Developer"
                  width={1200}
                  height={800}
                  quality={quality}
                  className="rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center pb-12 lg:pb-20">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-slate-300"
            >
              <span className="text-sm">Scroll</span>
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="mt-4 text-slate-300">
                Self-taught MERN developer with a knack for shipping polished,
  production-ready features. I care deeply about performance,
  accessibility, and clean code. I&apos;ve built complex apps including
  e-commerce, social, dashboards, and AI integrations.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {[
                  "Clean Architecture & SOLID",
                  "REST & GraphQL APIs",
                  "Auth (JWT, Sessions, OAuth)",
                  "Testing (Jest, Vitest)",
                  "CI/CD & Docker",
                  "Cloudinary, Stripe, Firebase",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Stat number="3+" label="Years Experience" />
                <Stat number="100+" label="Projects Completed" />
                <Stat number="4" label="Large Apps Shipped" />
                <Stat number="48 WPM" label="Typing Speed" />
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
                Currently building{" "}
                <span className="text-white font-medium">
                  a trading simulator
                </span>{" "}
                with Next.js, live charts, and a $10k demo balance.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    {s.icon}
                    {s.name}
                  </div>
                  <span className="text-xs text-slate-300">{s.level}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <a
              href="https://github.com/yourname"
              className="text-sm text-slate-300 hover:text-white"
            >
              View all →
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                  <div className="mt-4 flex gap-3 text-sm">
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
                    >
                      <ExternalLink className="size-4" /> Demo
                    </a>
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
                    >
                      <Github className="size-4" /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-8 grid gap-4">
            {[
              {
                role: "Full-Stack Developer",
                company: "Freelance / Remote",
                period: "2022 — Present",
                points: [
             "Built and maintained 10+ full-stack MERN apps from concept to production.",
"Improved Core Web Vitals (LCP < 2s) and reduced bundle by 35%.",
"Implemented role-based access, secure payments, and observability.",

                ],
              },
            ].map((job) => (
              <div
                key={job.role}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white">{job.role}</h3>
                    <p className="text-sm text-slate-300">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-300">{job.period}</p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-slate-300">
            Have a project in mind? Let's build something great together.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I will get back to you.");
            }}
            className="mt-8 grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
              placeholder="Subject"
            />
            <textarea
              rows={6}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
              placeholder="Message"
              required
            />
            <button className="justify-self-start rounded-xl bg-indigo-500/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Send Message
            </button>
          </form>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href="mailto:hello@example.com"
            >
              <Mail className="size-4" /> bhattarain538@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> Kathmandu, Nepal
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-300">
              <a
                className="hover:text-white"
                href="https://github.com/yourname"
              >
                <Github className="size-5" />
              </a>
              <a
                className="hover:text-white"
                href="https://linkedin.com/in/yourname"
              >
                <Linkedin className="size-5" />
              </a>
              <a className="hover:text-white" href="mailto:hello@example.com">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-sm text-slate-300">{label}</div>
    </div>
  );
}

function GridGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.25),transparent_40%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
