// === Module 5605: useCustomKeyboardHeight ===

// Module 5605 (useCustomKeyboardHeight)
import set from "set" /* 2 */;
import context from "context" /* 1495 */;
import computeEntryStateDefault from "computeEntryState" /* 1496 */;

const result = set.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1495).useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};