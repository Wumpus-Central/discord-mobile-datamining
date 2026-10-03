// === Module 9769: ChatViewWrapper ===

// Module 9769 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 9771 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 9782 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 9770 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;