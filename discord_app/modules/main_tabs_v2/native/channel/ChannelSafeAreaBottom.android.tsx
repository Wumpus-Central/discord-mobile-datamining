// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx
import set from "../../../../../_runtime/00002_set.js";
import _modDef12115 from "ChannelSafeAreaBottomNoop.tsx";
import _modDef12116 from "ChannelSafeAreaBottomAnimated.android.tsx";
import apexExperiment from "../../../keyboard/native/AnimatedKeyboardExperiment.tsx";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12115;
} else {
  importDefaultResult = _modDef12116;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;