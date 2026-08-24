// discord_app/modules/chat/native/ChatViewWrapper.tsx
import set from "../../../../_runtime/00002_set.js";
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard.tsx";
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase.tsx";
import apexExperiment from "../../keyboard/native/AnimatedKeyboardExperiment.tsx";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;