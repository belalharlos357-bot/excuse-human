// excuse-human — next-round entry (round 2).
// The one-line excuse lives in entry.txt; this script prints it.
// Hard reversal: the deadline was a suggestion, the semicolon is a hostage.
import { readFileSync } from "node:fs";

function readEntry(): string {
  const url = new URL("./entry.txt", import.meta.url);
  const text = readFileSync(url, "utf8");
  return text.trim();
}

const entry = readEntry();
console.log(entry);
