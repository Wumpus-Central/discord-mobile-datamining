// === Module 5284: useCustomKeyboardHeight ===

// Module 5284 (useCustomKeyboardHeight)
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1477).useAppEntryKey();
  return importDefault(1478)((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1477) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1478).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};