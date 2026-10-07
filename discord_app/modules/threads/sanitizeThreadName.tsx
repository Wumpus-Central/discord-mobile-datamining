// discord_app/modules/threads/sanitizeThreadName.tsx
import size from "../../../_runtime/metro/00002__.js";

const re0 = /\r\n|[\r\n]/g;
const result = size.fileFinishedImporting("modules/threads/sanitizeThreadName.tsx");

export default function sanitizeThreadName(str, arg1) {
  str = str.replace(re0, " ");
  let trimmed = str;
  if (arg1) {
    trimmed = str.trim();
  }
  return trimmed;
}
