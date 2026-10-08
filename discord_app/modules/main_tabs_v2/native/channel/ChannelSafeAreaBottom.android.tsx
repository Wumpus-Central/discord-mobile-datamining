// === Module 12421: ChannelSafeAreaBottom ===

// Module 12421 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 12422 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 12423 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10347 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;