// discord_app/modules/safe_area/SafeAreaStore.native.tsx
import set from "../../../_runtime/00002_set.js";
import EMPTY_SAFE_AREA_INSETS from "SafeAreaConstants.native.tsx";
import keys from "../../../_runtime/00644_keys.js";

let obj = { safeAreaInsets: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = set.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;