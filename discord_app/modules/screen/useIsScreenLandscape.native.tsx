// === Module 5126: useIsScreenLandscape ===

// Module 5126 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1478 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};