// === Module 5919: useIsScreenLandscape ===

// Module 5919 (useIsScreenLandscape)
import c from "c" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1485 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function n(arg0) {
      return arg0.byAppEntry[appEntryKey].screenIsLandscape;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return DimensionsStore(tmp3);
}) : (() => {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
});