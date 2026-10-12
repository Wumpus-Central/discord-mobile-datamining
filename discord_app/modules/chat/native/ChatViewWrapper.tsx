// === Module 10367: ChatViewWrapper ===

// Module 10367 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10369 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10380 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10368 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;