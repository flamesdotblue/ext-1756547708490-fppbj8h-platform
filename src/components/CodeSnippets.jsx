import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TABS = [
  { key: 'js', label: 'JavaScript' },
  { key: 'swift', label: 'Swift' },
  { key: 'kotlin', label: 'Kotlin' },
];

const SNIPPETS = {
  js: `// install
npm i @vanish/auth

// initialize (one line)
import { auth } from '@vanish/auth';
await auth.login(); // uses Passkeys/biometrics if available` ,
  swift: `// Swift Package Manager: https://vanish.dev/ios
import VanishAuth

// one line
try await VanishAuth.login() // Face ID / Touch ID` ,
  kotlin: `// Gradle: implementation("dev.vanish:auth:0.1.0")
import dev.vanish.auth.Auth

// one line
Auth.login(context) // BiometricPrompt / Passkeys`
}

export default function CodeSnippets() {
  const [tab, setTab] = useState('js');
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SNIPPETS[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <section id="code" className="max-w-6xl mx-auto px-6 mt-24">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Drop-in auth in one line</h2>
          <p className="text-neutral-400 mt-1">Embed passkeys and biometrics without the boilerplate. Works out of the box with WebAuthn, FIDO2, and native biometrics.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3 py-1.5 rounded-md text-sm transition ${tab === t.key ? 'bg-sky-500 text-neutral-900' : 'text-neutral-300 hover:text-white'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center gap-2 mb-3">
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-3 py-1.5 rounded-md text-sm transition ${tab === t.key ? 'bg-sky-500 text-neutral-900' : 'bg-white/5 text-neutral-300'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span className={`h-2 w-2 rounded-full ${tab==='js'?'bg-yellow-400':tab==='swift'?'bg-orange-400':'bg-green-400'}`} />
            <span>{tab === 'js' ? 'index.tsx' : tab === 'swift' ? 'ViewController.swift' : 'MainActivity.kt'}</span>
          </div>
          <button onClick={copy} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-neutral-200">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="p-4 md:p-6 overflow-x-auto text-sm leading-6">
          <code className="font-mono text-neutral-200 whitespace-pre">{SNIPPETS[tab]}</code>
        </pre>
      </div>
    </section>
  );
}
