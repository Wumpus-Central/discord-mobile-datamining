// discord_app/utils/native/KeyboardUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";

const Keyboard = get_ActivityIndicator.Keyboard;
const result = obj132.fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export const dismissKeyboard = function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
};