// discord_app/modules/safe_area/useStableSafeAreaInsets.native.tsx
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import useSafeAreaInsets from "useSafeAreaInsets.native.tsx";
import NativeSafeAreaInsetsModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx";
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
function getStableSafeAreaInsets() {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  } else {
    stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const tmp3Result = useSafeAreaInsets;
  }
  return stableSafeAreaInsets;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = appEntryKey(576).c(5);
      let obj = appEntryKey(576);
      appEntryKey = appEntryKey(1487).useAppEntryKey();
      if (cResult[0] !== appEntryKey) {
        const fn = function n() {
          let DEFAULT_APP_ENTRY_KEY = appEntryKey;
          if (appEntryKey === undefined) {
            DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
          }
          if (obj.isAndroid()) {
            let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          } else {
            stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
            const tmp3Result = useSafeAreaInsets;
          }
          return stableSafeAreaInsets;
        };
        cResult[0] = appEntryKey;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      const obj2 = appEntryKey(1487);
      [tmp5, importDefault] = noop.useState(tmp3);
      if (cResult[2] !== appEntryKey) {
        const fn2 = function u() {
          return subscribeToSafeAreaInsetsDefault(() => {
            let DEFAULT_APP_ENTRY_KEY = closure_1_0;
            if (closure_1_0 === undefined) {
              DEFAULT_APP_ENTRY_KEY = appEntryKey(1487).DEFAULT_APP_ENTRY_KEY;
            }
            if (obj.isAndroid()) {
              let stableSafeAreaInsets =
                NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
            } else {
              stableSafeAreaInsets = appEntryKey(1618).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
              const tmp4Result = appEntryKey(1618);
            }
            closure_1_1(stableSafeAreaInsets);
            obj = appEntryKey(1369);
          }, appEntryKey);
        };
        const items = [appEntryKey];
        cResult[2] = appEntryKey;
        cResult[3] = fn2;
        cResult[4] = items;
        let tmp7 = items;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      return tmp5;
    }
  : () => {
      appEntryKey = appEntryKey(1487).useAppEntryKey();
      const tmp2 = _slicedToArray(
        noop.useState(() => {
          let DEFAULT_APP_ENTRY_KEY = appEntryKey;
          if (appEntryKey === undefined) {
            DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
          }
          if (obj.isAndroid()) {
            let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          } else {
            stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
            const tmp3Result = useSafeAreaInsets;
          }
          return stableSafeAreaInsets;
        }),
        2,
      );
      closure_1 = tmp2[1];
      const items = [appEntryKey];
      const effect = noop.useEffect(
        () =>
          subscribeToSafeAreaInsetsDefault(() => {
            let DEFAULT_APP_ENTRY_KEY = closure_1_0;
            if (closure_1_0 === undefined) {
              DEFAULT_APP_ENTRY_KEY = appEntryKey(1487).DEFAULT_APP_ENTRY_KEY;
            }
            if (obj.isAndroid()) {
              let stableSafeAreaInsets = closure_1(1630).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
              const obj3 = closure_1(1630);
            } else {
              stableSafeAreaInsets = appEntryKey(1618).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
              const tmp4Result = appEntryKey(1618);
            }
            closure_1_1(stableSafeAreaInsets);
            obj = appEntryKey(1369);
          }, appEntryKey),
        items,
      );
      return tmp2[0];
    };
export { getStableSafeAreaInsets };
