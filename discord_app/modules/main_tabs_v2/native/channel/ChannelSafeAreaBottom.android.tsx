// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx
import set from "../../../../../_runtime/00002_set.js";
import _modDef12274 from "ChannelSafeAreaBottomNoop.tsx";
import _modDef12275 from "ChannelSafeAreaBottomAnimated.android.tsx";
import apexExperiment from "../../../keyboard/native/AnimatedKeyboardExperiment.tsx";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12274;
} else {
  importDefaultResult = _modDef12275;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;