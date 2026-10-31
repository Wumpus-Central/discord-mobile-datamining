// === Module 11235: ChatViewWrapper ===

// Module 11235 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11237 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11254 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11236 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;