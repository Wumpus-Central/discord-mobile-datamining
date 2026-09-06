// === Module 11349: ChatViewWrapper ===

// Module 11349 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11351 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11361 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11350 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;