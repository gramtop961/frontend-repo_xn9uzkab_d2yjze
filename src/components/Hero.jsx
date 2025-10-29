import React from 'react';
import { ArrowRight, Fingerprint } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-28 lg:pb-24">
        {/* 3D Scene */}
        <div className="relative w-full h-[520px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-slate-900 via-black to-black">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient overlay to blend scene with background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative -mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Fingerprint className="h-3.5 w-3.5 text-sky-400" />
              Passkeys • Face/Touch ID • WebAuthn
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Passwordless authentication your users won’t notice—until they do. 
              Ship biometric logins and passkeys with a single line, designed for reliability and trust from day one.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-black hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              >
                Get API keys
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Read the docs
              </a>
            </div>
            <p className="text-xs text-white/50">
              Built for devs. No lock-in. Works with your stack.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Live demo: Biometric prompt
              </div>
              <div className="rounded-xl bg-black/60 p-4 ring-1 ring-white/10">
                <pre className="text-sm text-sky-300 overflow-auto">
{`// One line to turn on biometrics
import { Auth } from 'holo-auth';

await Auth.signIn({ method: 'biometric' }); // ✅`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
