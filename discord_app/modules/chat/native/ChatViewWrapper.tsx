// === Module 10692: ChatViewWrapper ===

// Module 10692 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10694 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10704 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10693 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;