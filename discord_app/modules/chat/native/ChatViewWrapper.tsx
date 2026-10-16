// === Module 10612: ChatViewWrapper ===

// Module 10612 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10614 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10625 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10613 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;