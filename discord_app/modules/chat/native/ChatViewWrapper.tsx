// === Module 9782: ChatViewWrapper ===

// Module 9782 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 9784 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 9795 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 9783 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;