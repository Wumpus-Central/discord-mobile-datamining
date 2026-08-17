// discord_app/modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx
import set from "../../../../../_runtime/00002_set.js";

let result = set.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};