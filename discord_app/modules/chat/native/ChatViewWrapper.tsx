// === Module 11936: ChatViewWrapper ===

// Module 11936 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11938 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11955 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11937 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;