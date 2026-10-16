// === Module 10615: ChatViewWrapper ===

// Module 10615 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10617 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10628 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10616 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;