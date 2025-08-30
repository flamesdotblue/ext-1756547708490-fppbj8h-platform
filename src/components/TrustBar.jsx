import React from 'react';

export default function TrustBar() {
  return (
    <section className="mt-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">Trusted by builders from modern product teams</p>
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <Badge label="WebAuthn" />
              <Badge label="FIDO2" />
              <Badge label="SOC 2 Ready" />
              <Badge label="GDPR" />
              <Badge label="OWASP ASVS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label }) {
  return (
    <div className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-neutral-900/60 text-neutral-300">
      {label}
    </div>
  );
}
