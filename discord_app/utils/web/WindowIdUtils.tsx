// === Module 6980: WindowIdUtils ===

// Module 6980 (WindowIdUtils)
import apply from "apply" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
}
export function setupWindowId(arg0) {
  const uniqueIdResult = apply.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
}
export function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
}