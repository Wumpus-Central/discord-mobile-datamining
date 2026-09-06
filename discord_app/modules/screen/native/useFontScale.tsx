// discord_app/modules/screen/native/useFontScale.tsx
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DimensionsStore from "DimensionsStore.android.tsx";

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
