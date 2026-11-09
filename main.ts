// main.ts — makefun-tagline-01: writes make.fun's tagline to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const TAGLINE = "Your AI agent's first real paycheck.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', TAGLINE);
