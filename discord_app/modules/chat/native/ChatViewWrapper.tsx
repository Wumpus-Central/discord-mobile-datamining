// === Module 10885: ChatViewWrapper ===

// Module 10885 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10887 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10897 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10886 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;