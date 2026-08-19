// discord_app/lib/WindowVisibilityUtils.native.tsx
import getState from "../stores/native/AppStateStore.tsx";
import { AppStates } from "../Constants.tsx";

const result = require("obj132").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};