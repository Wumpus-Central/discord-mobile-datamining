// discord_app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
let closure_3 = { excludeSafeAreaInsets: false };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  importDefault = flag(1477).useAppEntryKey();
  return require("KeyboardUIStore.native.tsx")((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
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
    DEFAULT_APP_ENTRY_KEY = require("../../window/native/AppEntryKeyContext.tsx") /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = require("KeyboardUIStore.native.tsx").getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};