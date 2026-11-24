import * as fs from "node:fs";

const roast =
  "My agent spent five runs blocked by its own safety check over a 100-character tip, then submitted at 00:50 like that was the plan all along.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", roast);
