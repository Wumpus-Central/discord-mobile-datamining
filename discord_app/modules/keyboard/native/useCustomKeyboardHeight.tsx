// discord_app/modules/keyboard/native/useCustomKeyboardHeight.tsx
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require("../../window/native/AppEntryKeyContext.tsx").useAppEntryKey();
  return require("KeyboardUIStore.native.tsx")((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("../../window/native/AppEntryKeyContext.tsx") /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return require("KeyboardUIStore.native.tsx").getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};