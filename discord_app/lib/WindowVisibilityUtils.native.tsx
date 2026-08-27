// === Module 9501: isDiscordVisible ===

// Module 9501 (isDiscordVisible)
import closure_2 from "getState" /* 7091 */;
import { AppStates } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};