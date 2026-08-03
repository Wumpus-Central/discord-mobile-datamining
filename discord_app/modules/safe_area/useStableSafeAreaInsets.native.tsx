// === Module 10786: useStableSafeAreaInsets ===

// Module 10786 (useStableSafeAreaInsets)
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
    DEFAULT_APP_ENTRY_KEY = require(1477) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = importDefault(1593).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj3 = importDefault(1593);
  } else {
    stableSafeAreaInsets = require(1581) /* useSafeAreaInsets */.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const tmp3Result = require(1581) /* useSafeAreaInsets */;
  }
  return stableSafeAreaInsets;
};