// === Module 1627: useSafeAreaInsets ===

// Module 1627 (useSafeAreaInsets)
import set from "set" /* 2 */;
import context from "context" /* 1495 */;
import _modDef1628 from "module_1628" /* 1628 */;

const result = set.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1495).useAppEntryKey();
  return _modDef1628((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1628.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};