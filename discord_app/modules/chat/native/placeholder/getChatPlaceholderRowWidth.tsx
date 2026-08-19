// === Module 11508: getChatPlaceholderRowWidth ===

// Module 11508 (getChatPlaceholderRowWidth)
import obj132 from "obj132" /* 2 */;

let result = obj132.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};