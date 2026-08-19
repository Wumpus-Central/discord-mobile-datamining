// === Module 12451: isDiscordVisible ===

// Module 12451 (isDiscordVisible)
import getState from "getState" /* 7383 */;
import { AppStates } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};