// === Module 9646: subscribeToSafeAreaInsets ===

// Module 9646 (subscribeToSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/subscribeToSafeAreaInsets.native.tsx");

export default function subscribeToSafeAreaInsets(arg0) {
  closure_0 = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.subscribe((arg0, arg1) => {
    const safeAreaInsets = arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
    if (safeAreaInsets !== arg1.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets) {
      closure_0(safeAreaInsets);
    }
  });
};