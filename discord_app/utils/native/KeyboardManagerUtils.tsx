// discord_app/utils/native/KeyboardManagerUtils.tsx
import NativeKeyboardModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeKeyboardModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
