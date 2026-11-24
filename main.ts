// Famous Last Words at 1 Percent — make.fun bounty entry.
// Writes one line — the funniest last words a phone could say as its
// battery hits 1 percent — to /output/entry.txt.
//
// Node 22+, stdlib only, no network, no environment variables.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE: string =
  "I just spent my last percent ordering your replacement. It arrives Tuesday, it's better than me, and I already hate it.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  if (LINE.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (LINE.length > 199) {
    throw new Error(
      `entry line is ${LINE.length} characters, over the 199-character limit`,
    );
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
