// === Module 11354: ChatViewWrapper ===

// Module 11354 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11356 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11366 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11355 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;