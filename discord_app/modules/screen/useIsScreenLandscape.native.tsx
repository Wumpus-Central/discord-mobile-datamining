// discord_app/modules/screen/useIsScreenLandscape.native.tsx
import c from "../../../_runtime/00576_c.js";
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DimensionsStore from "native/DimensionsStore.android.tsx";

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
export const useIsScreenLandscape = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsScreenLandscape() {
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
    }
  : function useIsScreenLandscape() {
      const appEntryKey = AppEntryKeyContext.useAppEntryKey();
      const items = [appEntryKey];
      return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
    };
