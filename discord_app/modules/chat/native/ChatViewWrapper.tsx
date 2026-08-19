// === Module 10555: ? ===

// Module 10555
import obj132 from "obj132" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10557 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10567 */;
import apexExperiment from "apexExperiment" /* 10556 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = obj132.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;