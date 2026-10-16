// === Module 1632: ChatInputFocused ===

// Module 1632 (ChatInputFocused)
import size from "module_2" /* 2 */;

let global = false;
const result = size.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  global = arg0;
}
export function getIsAnyChatInputFocused() {
  return global;
}