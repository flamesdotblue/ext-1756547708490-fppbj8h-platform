import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Fingerprint, Sparkles } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Simulate waitlist join for prelaunch
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-4">
              <Sparkles size={14} className="text-sky-400" />
              Passwordless by default
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Auth that disappears.
            </h1>
            <p className="mt-4 text-neutral-300 text-lg md:text-xl leading-relaxed">
              Ship biometric logins with a single line. No passwords, no friction—just secure, delightful sign-ins that fade into the background.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 h-12 outline-none text-neutral-100 placeholder:text-neutral-500 focus:border-sky-500/60 focus:ring-4 focus:ring-sky-500/10"
                />
                <Fingerprint className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
              </div>
              <button
                type="submit"
                className="h-12 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-900 font-medium transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_12px_40px_-12px_rgba(56,189,248,0.45)]"
              >
                {submitted ? 'You\'re on the list ✓' : 'Join waitlist'}
              </button>
            </form>

            <div className="mt-4 text-sm text-neutral-400">
              By joining, you agree to receive early access updates. No spam.
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm">
              <a href="#code" className="text-sky-400 hover:text-sky-300">Read the docs</a>
              <div className="h-1 w-1 rounded-full bg-neutral-600" />
              <span className="text-neutral-400">SDKs for Web, iOS, Android</span>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
