// discord_app/modules/safe_area/useSafeAreaInsets.native.tsx
import react from "../../../_runtime/00576_react.js";
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import SafeAreaStoreDefault from "SafeAreaStore.native.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = AppEntryKeyContext;
      const appEntryKey = obj2.useAppEntryKey();
      if (cResult[0] !== appEntryKey) {
        const fn = function t(arg0) {
          return arg0.byAppEntry[appEntryKey].safeAreaInsets;
        };
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      return SafeAreaStoreDefault(tmp4);
    }
  : () => {
      const obj = AppEntryKeyContext;
      let closure_0 = obj.useAppEntryKey();
      return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
    };
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default tmp2;
export const getSafeAreaInsets = function getSafeAreaInsets() {
  let DEFAULT_APP_ENTRY_KEY;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = SafeAreaStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
