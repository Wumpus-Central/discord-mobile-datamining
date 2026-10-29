// discord_app/utils/web/WindowIdUtils.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
}
export function setupWindowId(arg0) {
  const uniqueIdResult = _mod12.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
}
export function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
}
