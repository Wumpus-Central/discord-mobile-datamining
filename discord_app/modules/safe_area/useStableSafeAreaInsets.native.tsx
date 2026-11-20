// === Module 10695: useStableSafeAreaInsets ===

// Module 10695 (useStableSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1497 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1628 */;
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1640 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 10696 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1497).useAppEntryKey();
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
  items = [appEntryKey];
  const effect = noop.useEffect(() => subscribeToSafeAreaInsetsDefault(() => {
    let DEFAULT_APP_ENTRY_KEY = closure_1_0;
    if (closure_1_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(1497).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = closure_1(1640).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = closure_1(1640);
    } else {
      stableSafeAreaInsets = appEntryKey(1628).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = appEntryKey(1628);
    }
    closure_1_1(stableSafeAreaInsets);
    obj = appEntryKey(1378);
  }, appEntryKey), items);
  return tmp2[0];
};
export function getStableSafeAreaInsets() {
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