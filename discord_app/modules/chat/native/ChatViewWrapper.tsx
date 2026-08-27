// === Module 10906: ? ===

// Module 10906
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10908 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10918 */;
import apexExperiment from "apexExperiment" /* 10907 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;