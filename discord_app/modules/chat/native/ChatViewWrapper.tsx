// === Module 11701: ChatViewWrapper ===

// Module 11701 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11703 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11718 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11702 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;