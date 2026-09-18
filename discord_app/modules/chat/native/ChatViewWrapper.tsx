// === Module 11601: ChatViewWrapper ===

// Module 11601 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11603 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11613 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11602 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;