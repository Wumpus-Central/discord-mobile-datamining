// === Module 6014: WindowVisibilityUtils ===

// Module 6014 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 2122 */;

const AppStates = fn(1072).AppStates;
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