// discord_app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import context from "../../window/native/AppEntryKeyContext.tsx";
import computeEntryStateDefault from "KeyboardUIStore.native.tsx";

let closure_3 = { excludeSafeAreaInsets: false };
const result = obj132.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag(1497).useAppEntryKey();
  return computeEntryStateDefault((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
};
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
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};