// === Module 11698: ChatViewWrapper ===

// Module 11698 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11700 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11710 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11699 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;