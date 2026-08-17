// discord_app/modules/keyboard/native/useCustomKeyboardHeight.tsx
import set from "set" /* 2 */;
import context from "context" /* 1497 */;
import computeEntryStateDefault from "computeEntryState" /* 1498 */;
import { context } from "../../window/native/AppEntryKeyContext.tsx";

const result = set.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _context.useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};