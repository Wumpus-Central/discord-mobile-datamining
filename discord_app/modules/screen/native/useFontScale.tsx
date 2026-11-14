// === Module 5944: useFontScale ===

// Module 5944 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1497 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
}
export function useFontScale() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
}