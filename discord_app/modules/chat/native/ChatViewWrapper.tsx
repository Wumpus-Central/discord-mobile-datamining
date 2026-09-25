// === Module 10878: ChatViewWrapper ===

// Module 10878 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10880 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10890 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10879 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;