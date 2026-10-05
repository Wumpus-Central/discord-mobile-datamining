// === Module 6474: useCustomKeyboardHeight ===

// Module 6474 (useCustomKeyboardHeight)
import react from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].customKeyboardHeight;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (() => {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
});
const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default tmp2;
export const getCustomKeyboardHeight = function getCustomKeyboardHeight() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};