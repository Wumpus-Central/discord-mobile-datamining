// === Module 8944: getIsScreenLandscape ===

// Module 8944 (getIsScreenLandscape)
import noop from "noop" /* 19 */;
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry" /* 1495 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  appEntryKey = appEntryKey(1497).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};