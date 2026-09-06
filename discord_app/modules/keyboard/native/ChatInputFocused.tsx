// discord_app/modules/keyboard/native/ChatInputFocused.tsx
import size from "../../../../_runtime/metro/00002__.js";

let global = false;
const result = size.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  global = arg0;
}
export function getIsAnyChatInputFocused() {
  return global;
}
