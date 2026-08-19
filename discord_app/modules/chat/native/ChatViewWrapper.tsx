// discord_app/modules/chat/native/ChatViewWrapper.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard.tsx";
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase.tsx";
import apexExperiment from "../../keyboard/native/AnimatedKeyboardExperiment.tsx";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = obj132.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;