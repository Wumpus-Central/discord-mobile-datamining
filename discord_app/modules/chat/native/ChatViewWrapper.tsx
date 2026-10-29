// === Module 10986: ChatViewWrapper ===

// Module 10986 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10988 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10998 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10987 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;