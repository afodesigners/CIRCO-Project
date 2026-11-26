// Keeps the CSP script-src hashes in Landingpage/_headers in sync with the
// inline <script> blocks of Landingpage/index.html.
// Run `node tools/update-csp-hash.mjs` after editing the page's inline JS,
// before committing. `--check` exits 1 if _headers is out of date (no write).
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'Landingpage');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const headersPath = join(root, '_headers');
const headers = readFileSync(headersPath, 'utf8');

const hashes = [...html.matchAll(/<script(?![^>]*\ssrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((m) => `'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`);

const re = /script-src [^;]*/;
const m = headers.match(re);
if (!m) { console.error('No script-src directive in _headers'); process.exit(1); }
const next = `script-src 'self' ${hashes.join(' ')}`;
const changed = m[0] !== next;
console.log(`old: ${m[0]}\nnew: ${next}\n${changed ? 'CHANGED' : 'unchanged'}`);
if (process.argv.includes('--check')) process.exit(changed ? 1 : 0);
if (changed) writeFileSync(headersPath, headers.replace(re, next));
