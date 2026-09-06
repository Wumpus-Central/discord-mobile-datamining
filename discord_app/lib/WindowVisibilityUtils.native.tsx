// === Module 9611: isDiscordVisible ===

// Module 9611 (isDiscordVisible)
import closure_2 from "getState" /* 1895 */;
import { AppStates } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};