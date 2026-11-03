// === Module 11372: ChatViewWrapper ===

// Module 11372 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11374 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11391 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11373 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;