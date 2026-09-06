// discord_app/modules/safe_area/useStableSafeAreaInsets.native.tsx
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import useSafeAreaInsets from "useSafeAreaInsets.native.tsx";
import NativeSafeAreaInsetsModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx";
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1480).useAppEntryKey();
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
          DEFAULT_APP_ENTRY_KEY = appEntryKey(1480).DEFAULT_APP_ENTRY_KEY;
        }
        if (obj.isAndroid()) {
          let stableSafeAreaInsets = closure_1(1623).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          const obj3 = closure_1(1623);
        } else {
          stableSafeAreaInsets = appEntryKey(1611).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          const tmp4Result = appEntryKey(1611);
        }
        closure_1_1(stableSafeAreaInsets);
      }, appEntryKey),
    items,
  );
  return tmp2[0];
}
export const getStableSafeAreaInsets = function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
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
};
