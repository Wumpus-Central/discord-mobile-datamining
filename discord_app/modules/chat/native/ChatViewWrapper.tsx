// === Module 10916: ChatViewWrapper ===

// Module 10916 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10918 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10928 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10917 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;