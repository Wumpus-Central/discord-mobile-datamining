// === Module 10860: ChatViewWrapper ===

// Module 10860 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10862 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10872 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10861 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;