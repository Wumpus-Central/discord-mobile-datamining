// === Module 11723: ChatViewWrapper ===

// Module 11723 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11725 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11740 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11724 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;