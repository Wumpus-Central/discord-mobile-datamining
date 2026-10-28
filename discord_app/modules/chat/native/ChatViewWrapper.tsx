// === Module 10951: ChatViewWrapper ===

// Module 10951 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10953 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10963 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10952 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;