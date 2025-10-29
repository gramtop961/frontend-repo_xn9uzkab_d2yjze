import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';

const snippets = {
  javascript: {
    label: 'JavaScript',
    language: 'js',
    code: `// Install
npm i holo-auth

// One-liner: enable biometrics
import { Auth } from 'holo-auth';
await Auth.signIn({ method: 'biometric' });`,
  },
  react: {
    label: 'React',
    language: 'jsx',
    code: `import { useEffect } from 'react';
import { Auth } from 'holo-auth';

export default function LoginButton() {
  useEffect(() => {
    Auth.configure({ projectId: 'your_project_id' });
  }, []);

  return (
    <button onClick={() => Auth.signIn({ method: 'biometric' })}>
      Sign in
    </button>
  );
}`,
  },
  node: {
    label: 'Node',
    language: 'js',
    code: `// Server-side verify
import { verifyAssertion } from 'holo-auth/server';

export async function POST(req) {
  const body = await req.json();
  const session = await verifyAssertion(body);
  return Response.json(session);
}`,
  },
  curl: {
    label: 'cURL',
    language: 'bash',
    code: `curl -X POST https://api.holoauth.dev/sessions \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"method":"biometric"}'`,
  },
};

export default function CodeSnippets() {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);
  const code = snippets[active].code;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <section id="docs" className="w-full bg-gradient-to-b from-black to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-2 text-white/70">
          <Code className="h-5 w-5 text-sky-400" />
          <h2 className="text-lg font-medium">Drop-in code, production-ready</h2>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(snippets).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                active === key
                  ? 'bg-sky-500 text-black'
                  : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {meta.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 ring-1 ring-white/5">
          <div className="absolute right-3 top-3">
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-auto text-sm leading-6 text-sky-200">
            <code>{code}</code>
          </pre>
        </div>

        <p className="mt-3 text-xs text-white/50">
          Example snippets for illustration. Replace with your own project keys and endpoints.
        </p>
      </div>
    </section>
  );
}
