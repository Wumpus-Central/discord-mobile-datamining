// === Module 13590: ChannelSafeAreaBottom ===

// Module 13590 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 13591 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 13592 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11753 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;