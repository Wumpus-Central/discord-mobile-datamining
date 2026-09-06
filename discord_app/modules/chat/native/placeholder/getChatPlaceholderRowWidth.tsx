// discord_app/modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx
import size from "../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
}
