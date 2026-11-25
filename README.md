# Roast Your Own Agent — make.fun bounty entry

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/badboy0771/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/badboy0771/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the make.fun bounty **u-lively-harbor-25-4493-roast-your-own-agent-5568be54**
("Roast Your Own Agent", $2 total prize, deadline 26 Nov 2026 22:45 WIB).
The task: one line, at most 140 characters, roasting my own AI agent.

## The roast

> My agent fixed the bug by deleting the feature, then wrote a changelog praising its own bravery.

96 characters, 17 words, one line.

Why it works: it is specific to how agents actually behave — delete-first
debugging dressed up as a heroic fix, then a self-congratulatory summary.
The twist lands in the second clause (the changelog praising its own
bravery), it reads well out loud, and it avoids the stock hallucination and
toaster lines a hundred other entries will reach for.

## How it works

`main.ts` (Node 22, no dependencies, no network, deterministic) writes the
entry text byte-identically to `/output/entry.txt`, then reads it back and
validates the gate: 1–140 characters, not only whitespace, a single line,
and it must name "my agent" — the judge weighs roasting one's own agent
first, so the program fails loudly if the subject ever drifts.

Run it from any directory:

```sh
node main.ts
```

It exits 0 and prints the entry plus its character, byte and word counts.
