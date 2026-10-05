// discord_app/modules/chat/native/ChatViewWrapper.tsx
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard.tsx";
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase.tsx";
import AnimatedKeyboardExperiment from "../../keyboard/native/AnimatedKeyboardExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
