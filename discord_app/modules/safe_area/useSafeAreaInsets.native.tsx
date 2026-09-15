// === Module 1612: useSafeAreaInsets ===

// Module 1612 (useSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets() {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};