// === Module 10705: ChatViewWrapper ===

// Module 10705 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10707 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10717 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10706 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;