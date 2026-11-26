// === Module 1629: useSafeAreaInsets ===

// Module 1629 (useSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1498 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export function getSafeAreaInsets() {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
}