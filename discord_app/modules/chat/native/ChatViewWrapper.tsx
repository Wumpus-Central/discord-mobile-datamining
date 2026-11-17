// === Module 12441: ChatViewWrapper ===

// Module 12441 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 12443 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 12458 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 12442 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;