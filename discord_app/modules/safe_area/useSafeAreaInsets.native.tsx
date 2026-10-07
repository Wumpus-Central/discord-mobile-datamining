// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
import c from "../../../_runtime/00576_c.js";
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import SafeAreaStoreDefault from "SafeAreaStore.native.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const appEntryKey = AppEntryKeyContext.useAppEntryKey();
      if (cResult[0] !== appEntryKey) {
        const fn = function t(arg0) {
          return arg0.byAppEntry[appEntryKey].safeAreaInsets;
        };
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      return SafeAreaStoreDefault(tmp4);
    }
  : () => {
      closure_0 = AppEntryKeyContext.useAppEntryKey();
      return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
    };
export const getSafeAreaInsets = function getSafeAreaInsets() {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
