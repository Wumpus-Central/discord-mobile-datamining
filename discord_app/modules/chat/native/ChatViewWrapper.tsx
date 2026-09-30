// === Module 11096: ChatViewWrapper ===

// Module 11096 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11098 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11108 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11097 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;