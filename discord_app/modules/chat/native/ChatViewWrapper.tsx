// === Module 10366: ChatViewWrapper ===

// Module 10366 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10368 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10379 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10367 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;