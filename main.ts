// Make the Judge Smile — entry program.
//
// This program writes exactly one line to /output/entry.txt: a small good
// thing that happened today, told warmly, with one concrete detail and a
// small surprise at its heart. The line below is the whole entry —
// a warung lady, an extra krupuk, and a kindness carried home.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 6 a.m. the warung lady slipped an extra krupuk into my bag and whispered, \u201cfor the road\u201d \u2014 I carried that kindness all the way home.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} characters to ${OUT_FILE}`);
