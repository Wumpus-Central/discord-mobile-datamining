// discord_app/utils/native/KeyboardUtils.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import size from "../../../_runtime/metro/00002__.js";

const Keyboard = react_native.Keyboard;
const result = size.fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export const dismissKeyboard = function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
};
