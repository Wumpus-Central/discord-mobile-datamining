// === Module 12004: ChatViewWrapper ===

// Module 12004 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 12006 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 12022 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 12005 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;