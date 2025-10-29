import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CodeSnippets from './components/CodeSnippets';
import Features from './components/Features';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-sky-500/30 selection:text-white">
      <Hero />
      <TrustBar />
      <CodeSnippets />
      <Features />

      <footer className="border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white/70 text-sm">
            <span className="font-medium text-white">HoloAuth</span> — Passwordless that feels invisible.
          </div>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} HoloAuth Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
