// === Module 11752: ChatViewWrapper ===

// Module 11752 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11754 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11769 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11753 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;