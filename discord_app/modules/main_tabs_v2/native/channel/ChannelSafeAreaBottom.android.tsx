// === Module 13563: ChannelSafeAreaBottom ===

// Module 13563 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 13564 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 13565 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10910 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;