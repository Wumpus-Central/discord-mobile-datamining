// === Module 1630: ? ===

// Module 1630
import set from "set" /* 2 */;
import EMPTY_SAFE_AREA_INSETS from "EMPTY_SAFE_AREA_INSETS" /* 1631 */;
import keys from "keys" /* 644 */;

let obj = { safeAreaInsets: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = set.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;