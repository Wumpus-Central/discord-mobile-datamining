// === Module 10924: ? ===

// Module 10924
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10926 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10936 */;
import apexExperiment from "apexExperiment" /* 10925 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;