// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation of a traffic jam to /output/entry.txt.
//
// Line 1 explains a traffic jam to a 10-year-old in a single vivid
// sentence built on one analogy: a river of cars that has frozen solid.
// Line 2 says why the analogy works: what it maps and what it leaves out.
//
// The program is fully deterministic: it writes a fixed string literal,
// makes no network calls, uses no randomness, and reads no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "A traffic jam is a river of cars that has frozen solid, so every driver just sits and waits for the ice to melt.";
const LINE_2 =
  "It maps how a whole stream of cars stops moving all at once, but it leaves out that real ice melts on its own, while a jam only clears when the cars at the front start moving again.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// Self-check against the competition gate: the entry must be UTF-8 text
// of 1 to 400 characters and exactly two lines. Fail loudly instead of
// writing an entry the gate would refuse.
const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > 400) {
  throw new Error(`entry is ${entryChars} characters, outside the 1-400 gate`);
}
if (ENTRY.trimEnd().split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
