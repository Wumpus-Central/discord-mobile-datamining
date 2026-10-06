// === Module 5952: WindowIdUtils ===

// Module 5952 (WindowIdUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export const getWindowId = function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
};
export const setupWindowId = function setupWindowId(arg0) {
  const obj = _mod12;
  const uniqueIdResult = obj.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
};
export const getMainWindowId = function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
};