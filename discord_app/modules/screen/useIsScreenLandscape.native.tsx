// === Module 8560: useIsScreenLandscape ===

// Module 8560 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1497 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
}
export function useIsScreenLandscape() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
}