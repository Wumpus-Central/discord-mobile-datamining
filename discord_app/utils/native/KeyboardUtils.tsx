// discord_app/utils/native/KeyboardUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

const Keyboard = _mod17.Keyboard;
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
