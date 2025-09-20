/* eslint-disable */

"use client";

import React, { useState } from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";

const ContactComp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const { error } = await res.json();
        setStatus("❌ Failed: " + (error || "Something went wrong"));
      }
    } catch (err) {
      setStatus("❌ Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-slate-300">
          Have a project in mind? Let's build something great together.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
              placeholder="Email"
              required
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="justify-self-start rounded-xl bg-indigo-500/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-slate-300">{status}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href="mailto:bhattarain538@gmail.com"
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
  );
};

export default ContactComp;
