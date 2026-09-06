// === Module 1612: SafeAreaStore ===

// Module 1612 (SafeAreaStore)
import SafeAreaConstants from "SafeAreaConstants" /* 1613 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let obj = { safeAreaInsets: SafeAreaConstants.INITIAL_SAFE_AREA_INSETS };
obj = module_560.create(() => {
  let byAppEntry = { byAppEntry: null };
  byAppEntry = { main: byAppEntry, share: byAppEntry };
  byAppEntry.byAppEntry = byAppEntry;
  return byAppEntry;
});
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;