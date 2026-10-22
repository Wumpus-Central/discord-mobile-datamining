// === Module 10877: ChatViewWrapper ===

// Module 10877 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10879 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10889 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10878 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;