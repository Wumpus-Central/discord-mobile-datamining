// discord_app/modules/screen/native/useFontScale.tsx
import c from "../../../../_runtime/00576_c.js";
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DimensionsStore from "DimensionsStore.android.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFontScale() {
      const cResult = c.c(2);
      const appEntryKey = AppEntryKeyContext.useAppEntryKey();
      if (cResult[0] !== appEntryKey) {
        const fn = function t(arg0) {
          return arg0.byAppEntry[appEntryKey].fontScale;
        };
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return DimensionsStore(tmp3);
    }
  : function useFontScale() {
      const appEntryKey = AppEntryKeyContext.useAppEntryKey();
      const items = [appEntryKey];
      return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
    };
