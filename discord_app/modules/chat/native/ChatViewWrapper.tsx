// === Module 10908: ChatViewWrapper ===

// Module 10908 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10910 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10920 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10909 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;