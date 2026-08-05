// discord_app/modules/keyboard/native/useCustomKeyboardHeight.tsx
import { context } from "../../window/native/AppEntryKeyContext.tsx";
import { computeEntryState } from "KeyboardUIStore.native.tsx";
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _context.useAppEntryKey();
  return computeEntryState((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryState.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};