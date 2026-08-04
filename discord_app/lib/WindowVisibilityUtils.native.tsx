// discord_app/lib/WindowVisibilityUtils.native.tsx
import getState from "getState";
import { AppStates } from "ME";

const result = require("NativeEventEmitter").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};