// === Module 11381: ChatViewWrapper ===

// Module 11381 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11383 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11393 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11382 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;