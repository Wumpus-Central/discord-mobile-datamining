// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import _modDef11814 from "ChannelSafeAreaBottomNoop.tsx";
import _modDef11815 from "ChannelSafeAreaBottomAnimated.android.tsx";
import apexExperiment from "../../../keyboard/native/AnimatedKeyboardExperiment.tsx";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef11814;
} else {
  importDefaultResult = _modDef11815;
}
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;