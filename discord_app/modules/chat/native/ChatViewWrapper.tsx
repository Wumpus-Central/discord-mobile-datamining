// === Module 10346: ChatViewWrapper ===

// Module 10346 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10348 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10359 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10347 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;