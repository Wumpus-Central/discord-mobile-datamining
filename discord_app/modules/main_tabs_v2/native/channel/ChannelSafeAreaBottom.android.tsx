// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop.tsx";
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated.android.tsx";
import AnimatedKeyboardExperiment from "../../../keyboard/native/AnimatedKeyboardExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
