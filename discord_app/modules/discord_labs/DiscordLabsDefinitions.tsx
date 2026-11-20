// discord_app/modules/discord_labs/DiscordLabsDefinitions.tsx
import size from "../../../_runtime/metro/00002__.js";

const items = [];
const set = new Set(items.map((labId) => labId.labId));
const result = size.fileFinishedImporting("modules/discord_labs/DiscordLabsDefinitions.tsx");

export function isDefinedLab(arg0) {
  return set.has(arg0);
}
