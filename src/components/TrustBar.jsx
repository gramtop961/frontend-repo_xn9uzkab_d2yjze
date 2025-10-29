import React from 'react';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="w-full border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
            <Shield className="h-5 w-5 text-sky-400" />
            <span className="text-sm">Passkey-first • WebAuthn-native</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
            <Lock className="h-5 w-5 text-sky-400" />
            <span className="text-sm">End-to-end encrypted credentials</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
            <CheckCircle2 className="h-5 w-5 text-sky-400" />
            <span className="text-sm">99.99% uptime SLA</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/50">
          <span className="text-xs">Trusted by product teams at</span>
          <span className="text-sm">NovaLabs</span>
          <span className="text-sm">ByteForge</span>
          <span className="text-sm">Zephyr</span>
          <span className="text-sm">Arcadia</span>
          <span className="text-sm">Helix</span>
        </div>
      </div>
    </section>
  );
}
