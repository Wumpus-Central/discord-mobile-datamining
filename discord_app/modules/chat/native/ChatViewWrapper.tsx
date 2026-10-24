// === Module 10909: ChatViewWrapper ===

// Module 10909 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10911 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10921 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10910 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;