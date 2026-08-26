// === Module 11977: getChatPlaceholderRowWidth ===

// Module 11977 (getChatPlaceholderRowWidth)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};