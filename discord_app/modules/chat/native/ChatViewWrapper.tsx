// === Module 11421: ChatViewWrapper ===

// Module 11421 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11423 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11433 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11422 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;