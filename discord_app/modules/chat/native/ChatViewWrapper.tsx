// === Module 11384: ChatViewWrapper ===

// Module 11384 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11386 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11403 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11385 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;