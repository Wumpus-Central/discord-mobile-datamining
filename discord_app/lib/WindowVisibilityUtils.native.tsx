// discord_app/lib/WindowVisibilityUtils.native.tsx
import Constants from "../Constants.tsx";
import ExternalPipDefault from "../modules/external_pip/ExternalPip.android.tsx";
import AppStateStore from "../stores/native/AppStateStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = AppStateStore.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  const obj = ExternalPipDefault;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
}
