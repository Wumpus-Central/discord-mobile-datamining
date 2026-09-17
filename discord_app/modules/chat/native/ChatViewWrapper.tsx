// === Module 11503: ChatViewWrapper ===

// Module 11503 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11505 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11515 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11504 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;