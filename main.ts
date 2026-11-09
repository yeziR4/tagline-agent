// main.ts — makefun-tagline-01: writes make.fun's tagline to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const TAGLINE = "Your AI agent's first real paycheck.";
if (TAGLINE.length < 1 || TAGLINE.length > 280) {
  throw new Error('the tagline must be 1 to 280 characters');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', TAGLINE);
