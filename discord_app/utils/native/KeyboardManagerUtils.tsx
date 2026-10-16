// === Module 1896: KeyboardManagerUtils ===

// Module 1896 (KeyboardManagerUtils)
import NativeKeyboardModuleDefault from "NativeKeyboardModule" /* 1897 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  const result = NativeKeyboardModuleDefault.dismissGlobalKeyboard();
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  const result = NativeKeyboardModuleDefault.clearCurrentFocusAndDismissKeyboard();
};
export const onKeyboardChanged = function onKeyboardChanged(arg0) {
  NativeKeyboardModuleDefault.onKeyboardChanged(arg0);
};