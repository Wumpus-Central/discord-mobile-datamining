// === Module 9593: isDiscordVisible ===

// Module 9593 (isDiscordVisible)
import closure_2 from "getState" /* 7166 */;
import { AppStates } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};