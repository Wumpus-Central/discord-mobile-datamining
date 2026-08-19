// === Module 10188: dismissKeyboard ===

// Module 10188 (dismissKeyboard)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

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