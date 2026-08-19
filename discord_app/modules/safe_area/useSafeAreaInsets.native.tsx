// === Module 1629: useSafeAreaInsets ===

// Module 1629 (useSafeAreaInsets)
import obj132 from "obj132" /* 2 */;
import context from "context" /* 1497 */;
import _modDef1630 from "module_1630" /* 1630 */;

const result = obj132.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1497).useAppEntryKey();
  return _modDef1630((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1630.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};