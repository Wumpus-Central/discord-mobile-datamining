// === Module 5828: WindowVisibilityUtils ===

// Module 5828 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1998 */;

const AppStates = fn(1084).AppStates;
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