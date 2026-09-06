// discord_app/utils/native/KeyboardManagerUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import NativeKeyboardModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeKeyboardModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = NativeKeyboardModuleDefault;
    if (obj2 != null) {
      const result = obj2.clearCurrentFocusAndDismissKeyboard();
    }
  }
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
};
