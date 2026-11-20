// === Module 2018: KeyboardManagerUtils ===

// Module 2018 (KeyboardManagerUtils)
import NativeKeyboardModuleDefault from "NativeKeyboardModule" /* 2019 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export function dismissGlobalKeyboard() {
  const result = NativeKeyboardModuleDefault.dismissGlobalKeyboard();
}
export function clearCurrentFocusAndDismissKeyboard() {
  const result = NativeKeyboardModuleDefault.clearCurrentFocusAndDismissKeyboard();
}
export function onKeyboardChanged(arg0) {
  NativeKeyboardModuleDefault.onKeyboardChanged(arg0);
}