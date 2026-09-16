// === Module 11495: ChatViewWrapper ===

// Module 11495 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11497 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11507 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11496 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;