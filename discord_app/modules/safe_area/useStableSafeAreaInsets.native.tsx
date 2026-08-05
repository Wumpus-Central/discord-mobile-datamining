// discord_app/modules/safe_area/useStableSafeAreaInsets.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("context").fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1477).useAppEntryKey();
  const tmp2 = callback(React.useState(() => {
    let DEFAULT_APP_ENTRY_KEY = appEntryKey;
    if (appEntryKey === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(outer1_2[2]).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = callback(tmp4[4]).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = callback(tmp4[4]);
    } else {
      stableSafeAreaInsets = appEntryKey(tmp4[5]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp3Result = appEntryKey(tmp4[5]);
    }
    return stableSafeAreaInsets;
  }), 2);
  let closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = React.useEffect(() => callback(outer1_2[6])(() => {
    let DEFAULT_APP_ENTRY_KEY = closure_0;
    if (closure_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = outer1_0(outer1_2[2]).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = outer1_1(tmp5[4]).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = outer1_1(tmp5[4]);
    } else {
      stableSafeAreaInsets = outer1_0(tmp5[5]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = outer1_0(tmp5[5]);
    }
    closure_1(stableSafeAreaInsets);
  }, appEntryKey), items);
  return tmp2[0];
};
export const getStableSafeAreaInsets = function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("../window/native/AppEntryKeyContext.tsx") /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = require("../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx").getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj3 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx");
  } else {
    stableSafeAreaInsets = require("useSafeAreaInsets.native.tsx") /* useSafeAreaInsets */.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const tmp3Result = require("useSafeAreaInsets.native.tsx") /* useSafeAreaInsets */;
  }
  return stableSafeAreaInsets;
};