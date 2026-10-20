// === Module 10716: ChatViewWrapper ===

// Module 10716 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10718 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10728 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10717 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;