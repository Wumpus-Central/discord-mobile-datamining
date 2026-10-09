// === Module 10333: ChatViewWrapper ===

// Module 10333 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10335 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10346 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10334 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;