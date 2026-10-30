// === Module 11216: ChatViewWrapper ===

// Module 11216 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11218 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11228 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11217 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;