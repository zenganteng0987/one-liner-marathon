import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My calendar reminded me to relax, so I scheduled it for next month — I'm now three weeks behind on doing nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
