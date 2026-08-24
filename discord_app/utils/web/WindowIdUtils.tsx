// === Module 6951: getWindowId ===

// Module 6951 (getWindowId)
import set from "set" /* 2 */;
import apply from "apply" /* 12 */;

const result = set.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export const getWindowId = function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
};
export const setupWindowId = function setupWindowId(arg0) {
  const uniqueIdResult = apply.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
};
export const getMainWindowId = function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
};