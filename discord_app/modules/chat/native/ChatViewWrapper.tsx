// === Module 11431: ChatViewWrapper ===

// Module 11431 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11433 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11450 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11432 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;