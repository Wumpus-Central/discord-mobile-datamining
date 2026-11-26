// === Module 11800: ChatViewWrapper ===

// Module 11800 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11802 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11817 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11801 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;