// === Module 11060: ChatViewWrapper ===

// Module 11060 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11062 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11072 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11061 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;