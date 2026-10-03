// === Module 9111: WindowVisibilityUtils ===

// Module 9111 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1986 */;

const AppStates = fn(1085).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = AppStateStore.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};