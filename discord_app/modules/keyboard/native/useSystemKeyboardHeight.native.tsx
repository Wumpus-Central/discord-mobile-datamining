// === Module 1884: useSystemKeyboardHeight ===

// Module 1884 (useSystemKeyboardHeight)
import react from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = { excludeSafeAreaInsets: false };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = arg0;
  const obj = react;
  const cResult = obj.c(3);
  if (undefined === arg0) {
    tmp = closure_3;
  }
  const excludeSafeAreaInsets = tmp.excludeSafeAreaInsets;
  let closure_0 = tmp5;
  const tmp2Result = AppEntryKeyContext;
  const appEntryKey = tmp2Result.useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    let tmp7;
    if (cResult[1] === (undefined !== excludeSafeAreaInsets && excludeSafeAreaInsets)) {
      tmp7 = cResult[2];
    }
    return KeyboardUIStoreDefault(tmp7);
  }
  const fn = function s(arg0) {
    return closure_0 ? arg0.byAppEntry[appEntryKey].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[appEntryKey].keyboardHeight;
  };
  cResult[0] = appEntryKey;
  cResult[1] = undefined !== excludeSafeAreaInsets && excludeSafeAreaInsets;
  cResult[2] = fn;
  tmp7 = fn;
}) : (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  const obj = AppEntryKeyContext;
  let closure_1 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
});
const result = size.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default tmp2;
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
  const obj = KeyboardUIStoreDefault;
  const tmp4 = obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};