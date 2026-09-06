// discord_app/modules/keyboard/native/useCustomKeyboardHeight.tsx
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import KeyboardUIStoreDefault from "KeyboardUIStore.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
}
export const getCustomKeyboardHeight = function getCustomKeyboardHeight() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
