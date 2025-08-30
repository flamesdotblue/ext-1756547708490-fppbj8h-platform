import React from 'react';
import { Shield, Fingerprint, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-sky-400" size={22} />,
    title: 'One line, zero friction',
    desc: 'Embed passkeys and native biometrics in minutes. Sensible defaults, progressive enhancement for older browsers.'
  },
  {
    icon: <Fingerprint className="text-fuchsia-400" size={22} />,
    title: 'Biometrics everywhere',
    desc: 'Face ID, Touch ID, Android Biometrics, and cross-device passkeys. Delightful UX users already trust.'
  },
  {
    icon: <Shield className="text-emerald-400" size={22} />,
    title: 'Enterprise-grade security',
    desc: 'WebAuthn + FIDO2 under the hood. Hardware-backed keys, device-bound credentials, phishing resistance.'
  },
  {
    icon: <Lock className="text-amber-300" size={22} />,
    title: 'Privacy first',
    desc: 'No passwords to leak. Cryptographic challenges and minimal data retention by design.'
  }
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-24">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Built to earn trust</h2>
        <p className="text-neutral-400 md:text-lg">From startup to enterprise, Vanish Auth removes login friction while strengthening your security posture. Designed for compliance and peace of mind.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
              {f.icon}
            </div>
            <h3 className="font-medium">{f.title}</h3>
            <p className="text-sm text-neutral-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
