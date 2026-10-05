// discord_app/modules/screen/native/useFontScale.tsx
import react2 from "../../../../_runtime/00576_react.js";
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import DimensionsStore from "DimensionsStore.android.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = AppEntryKeyContext;
      const appEntryKey = obj2.useAppEntryKey();
      if (cResult[0] !== appEntryKey) {
        const fn = function t(arg0) {
          return arg0.byAppEntry[appEntryKey].fontScale;
        };
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return DimensionsStore(tmp3);
    }
  : () => {
      const obj = AppEntryKeyContext;
      const appEntryKey = obj.useAppEntryKey();
      const items = [appEntryKey];
      return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
    };
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = tmp2;
