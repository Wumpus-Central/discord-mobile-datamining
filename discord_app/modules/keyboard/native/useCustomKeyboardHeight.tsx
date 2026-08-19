// === Module 5444: useCustomKeyboardHeight ===

// Module 5444 (useCustomKeyboardHeight)
import obj132 from "obj132" /* 2 */;
import context from "context" /* 1497 */;
import computeEntryStateDefault from "computeEntryState" /* 1498 */;

const result = obj132.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1497).useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};