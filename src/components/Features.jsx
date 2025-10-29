import React from 'react';
import { Fingerprint, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometrics by default',
    body:
      'Delight users with passkeys, Face ID, and Touch ID. Designed around WebAuthn for maximum compatibility.',
  },
  {
    icon: Zap,
    title: 'One line to integrate',
    body:
      'Drop in the SDK and ship passwordless in minutes. Minimal config, instant UX wins.',
  },
  {
    icon: Shield,
    title: 'Built for trust',
    body:
      'Defense-in-depth, encrypted at rest and in transit, and a transparent status page with 99.99% uptime.',
  },
];

export default function Features() {
  return (
    <section className="w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Why teams choose HoloAuth</h2>
          <a
            href="#get-started"
            className="hidden sm:inline-flex rounded-lg bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10"
          >
            Start free
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
              <Icon className="h-6 w-6 text-sky-400" />
              <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm leading-6">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
