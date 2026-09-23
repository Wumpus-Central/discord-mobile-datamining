// === Module 11692: ChatViewWrapper ===

// Module 11692 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11694 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11704 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11693 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;