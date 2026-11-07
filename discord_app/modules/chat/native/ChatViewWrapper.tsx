// === Module 11375: ChatViewWrapper ===

// Module 11375 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11377 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11394 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11376 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;