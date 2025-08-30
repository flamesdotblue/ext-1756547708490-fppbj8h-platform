import React from 'react';
import Hero from './components/Hero';
import CodeSnippets from './components/CodeSnippets';
import Features from './components/Features';
import TrustBar from './components/TrustBar';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Hero />
      <TrustBar />
      <Features />
      <CodeSnippets />
      <footer className="py-10 border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Vanish Auth — Auth that disappears.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a href="#code" className="hover:text-neutral-200 transition">Docs</a>
            <a href="#" className="hover:text-neutral-200 transition">Security</a>
            <a href="#" className="hover:text-neutral-200 transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
