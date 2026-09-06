// discord_app/modules/screen/useIsScreenLandscape.native.tsx
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DimensionsStore from "native/DimensionsStore.android.tsx";

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
