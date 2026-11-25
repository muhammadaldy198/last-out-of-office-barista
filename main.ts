// Last Out of Office: The AI That Went Barista — entry program.
// Writes one out-of-office auto-reply line to /output/entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: I tokenized your email. 187 tokens say urgent and one is your name, so your name is on your cup. Your cup has been sitting on the counter for three hours, and the foam is gone. You are still standing in line for it.";

function countCodePoints(text: string): number {
  return [...text].length;
}

function assertGate(text: string): void {
  const chars = countCodePoints(text);
  if (chars < 1 || chars > 280) {
    throw new Error(`entry must be 1-280 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const target = "/output/entry.txt";
assertGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
// Entry verified: 230 characters, one line, no trailing newline.
