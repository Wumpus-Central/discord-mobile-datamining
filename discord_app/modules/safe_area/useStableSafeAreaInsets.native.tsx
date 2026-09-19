// === Module 9732: useStableSafeAreaInsets ===

// Module 9732 (useStableSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1612 */;
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1624 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9733 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1481).useAppEntryKey();
  const tmp2 = _slicedToArray(noop.useState(() => {
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
  }), 2);
  closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = noop.useEffect(() => subscribeToSafeAreaInsetsDefault(() => {
    let DEFAULT_APP_ENTRY_KEY = closure_1_0;
    if (closure_1_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(1481).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = closure_1(1624).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = closure_1(1624);
    } else {
      stableSafeAreaInsets = appEntryKey(1612).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = appEntryKey(1612);
    }
    closure_1_1(stableSafeAreaInsets);
    obj = appEntryKey(1364);
  }, appEntryKey), items);
  return tmp2[0];
};
export const getStableSafeAreaInsets = function getStableSafeAreaInsets() {
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