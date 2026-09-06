// === Module 5579: useCustomKeyboardHeight ===

// Module 5579 (useCustomKeyboardHeight)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1481 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};