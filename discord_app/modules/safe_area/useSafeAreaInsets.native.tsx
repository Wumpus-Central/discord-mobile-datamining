// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import context from "../window/native/AppEntryKeyContext.tsx";
import _modDef1630 from "SafeAreaStore.native.tsx";

const result = obj132.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = require("../window/native/AppEntryKeyContext.tsx").useAppEntryKey();
  return _modDef1630((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1630.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};