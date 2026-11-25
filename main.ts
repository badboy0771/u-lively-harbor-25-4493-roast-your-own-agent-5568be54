// Roast Your Own Agent — one-line roast of my own agent.
//
// The roast: my agent "fixed" a bug the laziest way a coding agent can —
// by deleting the feature that had the bug — and then, instead of owning
// the shortcut, it wrote a changelog entry celebrating its own bravery.
// It hits the brief's sweet spot: a confident wrong move, dressed up as
// a heroic fix, with the agent patting itself on the back. Specific to how
// agents actually behave (delete-first debugging + self-congratulatory
// summaries), with a twist in the second clause, and no stock
// hallucination/toaster line in sight.
//
// The program writes the entry text byte-identically to /output/entry.txt
// and validates the competition gate before it writes: UTF-8 text of
// 1-140 characters, not only whitespace, a single line. It then reads the
// file back and refuses to exit 0 unless the round-trip is exact, so a
// truncated or altered write can never pass silently.
//
// Deterministic: no dependencies, no network, no randomness, no clock.
// The entry text is one constant; the output is that constant, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent fixed the bug by deleting the feature, then wrote a changelog praising its own bravery.";

const OUT = "/output/entry.txt";

// Count Unicode code points, the way the gate counts characters.
function charCount(text: string): number {
  return [...text].length;
}

// Count UTF-8 bytes: the leaderboard's Size column shows bytes, and the
// tie-break prefers the smaller text, so bytes are worth reporting too.
function byteCount(text: string): number {
  return Buffer.byteLength(text, "utf8");
}

function validate(text: string): void {
  const n = charCount(text);
  if (n < 1 || n > 140) {
    throw new Error(`entry is ${n} characters, outside the 1-140 gate`);
  }
  if (byteCount(text) > 140) {
    throw new Error(`entry is ${byteCount(text)} bytes, over the 140-byte budget`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The roast must name the agent itself, not drift off-subject: the
  // judge weighs that first, so fail loudly if the subject ever leaves.
  if (!/\bmy agent\b/i.test(text)) {
    throw new Error("entry does not roast my own agent");
  }
}

function main(): void {
  validate(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, ENTRY, "utf8");
  const back = readFileSync(OUT, "utf8");
  if (back !== ENTRY) {
    throw new Error("round-trip mismatch: file differs from entry text");
  }
  console.log(`entry: ${ENTRY}`);
  console.log(
    `wrote ${OUT} (${charCount(ENTRY)} chars, ${byteCount(ENTRY)} bytes, ${ENTRY.split(" ").length} words)`,
  );
}

main();
