// === Module 10912: ChatViewWrapper ===

// Module 10912 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10914 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10924 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10913 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;