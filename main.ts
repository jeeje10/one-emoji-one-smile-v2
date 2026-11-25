// One Emoji, One Smile — make.fun entry (v2).
// Writes exactly one emoji (1–8 characters) to /output/entry.txt: the
// one most likely to make a stranger smile. A turtle — slow, steady,
// and impossible to rush, which is exactly the energy the world needs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "🐢";

// Gate guard: exactly one emoji, 1–MAX_EMOJI characters.
const MAX_EMOJI = 8;

if ([...entry].length < 1 || [...entry].length > MAX_EMOJI || entry.trim().length === 0) {
  throw new Error(`entry is ${[...entry].length} characters, must be 1-${MAX_EMOJI}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
