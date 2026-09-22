// === Module 11616: ChatViewWrapper ===

// Module 11616 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11618 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11628 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11617 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;