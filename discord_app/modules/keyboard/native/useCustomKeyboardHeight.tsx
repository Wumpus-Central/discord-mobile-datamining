// discord_app/modules/keyboard/native/useCustomKeyboardHeight.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import context from "../../window/native/AppEntryKeyContext.tsx";
import computeEntryStateDefault from "KeyboardUIStore.native.tsx";

const result = obj132.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = require("../../window/native/AppEntryKeyContext.tsx").useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};