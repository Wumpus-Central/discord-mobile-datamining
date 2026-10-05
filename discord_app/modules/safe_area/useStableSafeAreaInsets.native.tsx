// === Module 9140: useStableSafeAreaInsets ===

// Module 9140 (useStableSafeAreaInsets)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1618 */;
import react_nativeDefault from "react-native" /* 1630 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9141 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let appEntryKey;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = appEntryKey(576);
  const cResult = obj.c(5);
  const obj2 = appEntryKey(1487);
  appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function n() {
      let stableSafeAreaInsets;
      let DEFAULT_APP_ENTRY_KEY = appEntryKey;
      if (appEntryKey === undefined) {
        DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
      }
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const obj3 = react_nativeDefault;
        stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      } else {
        const tmp3Result = useSafeAreaInsets;
        stableSafeAreaInsets = tmp3Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      }
      return stableSafeAreaInsets;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  [tmp5, importDefault] = react.useState(tmp3);
  _slicedToArray(react.useState(tmp3), 2);
  if (cResult[2] !== appEntryKey) {
    const fn2 = function u() {
      return subscribeToSafeAreaInsetsDefault(() => {
        let stableSafeAreaInsets;
        let DEFAULT_APP_ENTRY_KEY = closure_1_0;
        if (closure_1_0 === undefined) {
          DEFAULT_APP_ENTRY_KEY = appEntryKey(dependencyMap[2]).DEFAULT_APP_ENTRY_KEY;
        }
        const obj = appEntryKey(dependencyMap[3]);
        if (obj.isAndroid()) {
          const obj3 = react_nativeDefault;
          stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
        } else {
          const tmp4Result = appEntryKey(dependencyMap[5]);
          stableSafeAreaInsets = tmp4Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
        }
        closure_1_1(stableSafeAreaInsets);
      }, appEntryKey);
    };
    const items = [appEntryKey];
    cResult[2] = appEntryKey;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp7 = items;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const effect = react.useEffect(tmp6, tmp7);
  return tmp5;
}) : (() => {
  let appEntryKey;
  let closure_1;
  let first;
  let obj = appEntryKey(1487);
  appEntryKey = obj.useAppEntryKey();
  [first, closure_1] = react.useState(() => {
    let stableSafeAreaInsets;
    let DEFAULT_APP_ENTRY_KEY = appEntryKey;
    if (appEntryKey === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj3 = react_nativeDefault;
      stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    } else {
      const tmp3Result = useSafeAreaInsets;
      stableSafeAreaInsets = tmp3Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    }
    return stableSafeAreaInsets;
  });
  const items = [appEntryKey];
  const effect = react.useEffect(() => subscribeToSafeAreaInsetsDefault(() => {
    let stableSafeAreaInsets;
    let DEFAULT_APP_ENTRY_KEY = closure_1_0;
    if (closure_1_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(dependencyMap[2]).DEFAULT_APP_ENTRY_KEY;
    }
    const obj = appEntryKey(dependencyMap[3]);
    if (obj.isAndroid()) {
      const obj3 = closure_1(dependencyMap[4]);
      stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    } else {
      const tmp4Result = appEntryKey(dependencyMap[5]);
      stableSafeAreaInsets = tmp4Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    }
    closure_1_1(stableSafeAreaInsets);
  }, appEntryKey), items);
  return first;
});
function getStableSafeAreaInsets() {
  let DEFAULT_APP_ENTRY_KEY;
  let stableSafeAreaInsets;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = react_nativeDefault;
    stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  } else {
    const tmp3Result = useSafeAreaInsets;
    stableSafeAreaInsets = tmp3Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  }
  return stableSafeAreaInsets;
}
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default tmp2;
export { getStableSafeAreaInsets };