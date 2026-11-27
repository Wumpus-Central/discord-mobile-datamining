// === Module 11808: ChatViewWrapper ===

// Module 11808 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11810 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11825 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11809 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;