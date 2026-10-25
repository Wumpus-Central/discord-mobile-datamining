// === Module 10910: ChatViewWrapper ===

// Module 10910 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10912 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10922 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10911 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;