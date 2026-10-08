// === Module 10741: useStableSafeAreaInsets ===

// Module 10741 (useStableSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1630 */;
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1642 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 10351 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStableSafeAreaInsets() {
  const cResult = appEntryKey(576).c(5);
  let obj = appEntryKey(576);
  appEntryKey = appEntryKey(1499).useAppEntryKey();
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
  const obj2 = appEntryKey(1499);
  [tmp5, importDefault] = noop.useState(tmp3);
  if (cResult[2] !== appEntryKey) {
    const fn2 = function u() {
      return subscribeToSafeAreaInsetsDefault(() => {
        let DEFAULT_APP_ENTRY_KEY = closure_1_0;
        if (closure_1_0 === undefined) {
          DEFAULT_APP_ENTRY_KEY = appEntryKey(1499).DEFAULT_APP_ENTRY_KEY;
        }
        if (obj.isAndroid()) {
          let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
        } else {
          stableSafeAreaInsets = appEntryKey(1630).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          const tmp4Result = appEntryKey(1630);
        }
        closure_1_1(stableSafeAreaInsets);
        obj = appEntryKey(1381);
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
}) : (function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1499).useAppEntryKey();
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
      DEFAULT_APP_ENTRY_KEY = appEntryKey(1499).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = closure_1(1642).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = closure_1(1642);
    } else {
      stableSafeAreaInsets = appEntryKey(1630).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = appEntryKey(1630);
    }
    closure_1_1(stableSafeAreaInsets);
    obj = appEntryKey(1381);
  }, appEntryKey), items);
  return tmp2[0];
});
export { getStableSafeAreaInsets };