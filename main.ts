// excuse-human — round 2 entry (rewritten for the next blind round).
// Prints the one-line excuse stored in entry.txt.
// The deadline was a suggestion; the semicolon stays hostage.
import { readFile } from "node:fs/promises";

const entryUrl = new URL("./entry.txt", import.meta.url);
const raw = await readFile(entryUrl, "utf8");
const entry = raw.trim();
process.stdout.write(entry + "\n");
