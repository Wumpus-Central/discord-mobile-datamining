// === Module 10274: KeyboardUtils ===

// Module 10274 (KeyboardUtils)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

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