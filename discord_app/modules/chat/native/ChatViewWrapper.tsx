// === Module 11653: ChatViewWrapper ===

// Module 11653 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11655 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11670 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11654 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;