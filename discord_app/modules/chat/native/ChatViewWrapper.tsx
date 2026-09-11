// === Module 11443: ChatViewWrapper ===

// Module 11443 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11445 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11455 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11444 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;