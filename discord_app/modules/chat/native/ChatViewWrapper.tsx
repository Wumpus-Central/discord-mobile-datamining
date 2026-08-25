// === Module 10391: ? ===

// Module 10391
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10393 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10404 */;
import apexExperiment from "apexExperiment" /* 10392 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;