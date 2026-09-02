// === Module 11206: ? ===

// Module 11206
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11208 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11218 */;
import apexExperiment from "apexExperiment" /* 11207 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;