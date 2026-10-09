// === Module 1897: useSystemKeyboardHeight ===

// Module 1897 (useSystemKeyboardHeight)
import c from "c" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1500 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1501 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = { excludeSafeAreaInsets: false };
const result = size.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSystemKeyboardHeight(arg0) {
  let tmp = arg0;
  const cResult = c.c(3);
  if (undefined === arg0) {
    tmp = closure_3;
  }
  const excludeSafeAreaInsets = tmp.excludeSafeAreaInsets;
  closure_0 = tmp5;
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === tmp5) {
      let tmp7 = cResult[2];
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
  const tmp2Result = AppEntryKeyContext;
}) : (function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
});
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