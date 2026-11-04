// === Module 11423: ChatViewWrapper ===

// Module 11423 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11425 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11442 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11424 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;