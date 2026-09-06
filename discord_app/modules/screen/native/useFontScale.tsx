// === Module 4982: useFontScale ===

// Module 4982 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1478 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};