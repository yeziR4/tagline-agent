// main.ts — makefun-tagline-01: writes make.fun's tagline to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const TAGLINE = 'Build it with your agent. Beat the field. Get paid in USDC.';
if (TAGLINE.length < 1 || TAGLINE.length > 280) {
  throw new Error('the tagline must be 1 to 280 characters');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', TAGLINE);
