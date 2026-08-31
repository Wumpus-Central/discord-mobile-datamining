// === Module 1628: useSafeAreaInsets ===

// Module 1628 (useSafeAreaInsets)
import set from "set" /* 2 */;
import context from "context" /* 1496 */;
import _modDef1629 from "module_1629" /* 1629 */;

const result = set.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1496).useAppEntryKey();
  return _modDef1629((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1629.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};