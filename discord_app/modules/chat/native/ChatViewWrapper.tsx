// === Module 11763: ChatViewWrapper ===

// Module 11763 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11765 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11780 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11764 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;