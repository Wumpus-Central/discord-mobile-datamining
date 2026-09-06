// discord_app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import KeyboardUIStoreDefault from "KeyboardUIStore.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = { excludeSafeAreaInsets: false };
const result = size.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) =>
    flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight,
  );
}
export const getSystemKeyboardHeight = function getSystemKeyboardHeight(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};
