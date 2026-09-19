// === Module 11610: ChatViewWrapper ===

// Module 11610 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11612 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11622 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11611 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;