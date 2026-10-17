// === Module 10675: ChatViewWrapper ===

// Module 10675 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10677 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10688 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10676 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;