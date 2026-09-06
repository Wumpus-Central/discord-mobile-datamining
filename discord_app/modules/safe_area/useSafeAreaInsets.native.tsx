// === Module 1611: useSafeAreaInsets ===

// Module 1611 (useSafeAreaInsets)
import set from "set" /* 2 */;
import context from "context" /* 1480 */;
import _modDef1612 from "module_1612" /* 1612 */;

const result = set.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1480).useAppEntryKey();
  return _modDef1612((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1612.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};