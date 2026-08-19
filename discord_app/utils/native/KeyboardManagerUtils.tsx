// === Module 1892: dismissGlobalKeyboard ===

// Module 1892 (dismissGlobalKeyboard)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 1893 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = obj132.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = enforcingDefault;
    if (obj2 != null) {
      const result = obj2.dismissGlobalKeyboard();
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
  obj = obj1322;
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = enforcingDefault;
    if (obj2 != null) {
      const result = obj2.clearCurrentFocusAndDismissKeyboard();
    }
  }
  obj = obj1322;
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  if (obj.isAndroid()) {
    const obj2 = enforcingDefault;
    if (obj2 != null) {
      obj2.onKeyboardChanged(open);
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const onKeyboardChanged = KeyboardManager.onKeyboardChanged;
    if (onKeyboardChanged != null) {
      open = globalThis.open;
      onKeyboardChanged(globalThis.open);
    }
  }
  obj = obj1322;
};