// === Module 1874: KeyboardManagerUtils ===

// Module 1874 (KeyboardManagerUtils)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeKeyboardModuleDefault from "NativeKeyboardModule" /* 1875 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = NativeKeyboardModuleDefault;
    if (obj2 != null) {
      const result = obj2.dismissGlobalKeyboard();
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
  obj = PlatformUtils;
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = NativeKeyboardModuleDefault;
    if (obj2 != null) {
      const result = obj2.clearCurrentFocusAndDismissKeyboard();
    }
  }
  obj = PlatformUtils;
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  if (obj.isAndroid()) {
    const obj2 = NativeKeyboardModuleDefault;
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
  obj = PlatformUtils;
};