// discord_app/modules/safe_area/useStableSafeAreaInsets.native.tsx
import context from "../window/native/AppEntryKeyContext.tsx";
import useSafeAreaInsets from "useSafeAreaInsets.native.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1497).useAppEntryKey();
  const tmp2 = callback(React.useState(() => {
    let DEFAULT_APP_ENTRY_KEY = appEntryKey;
    if (appEntryKey === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(dependencyMap[2]).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = callback(dependencyMap[4]).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = callback(dependencyMap[4]);
    } else {
      stableSafeAreaInsets = appEntryKey(dependencyMap[5]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp3Result = appEntryKey(dependencyMap[5]);
    }
    return stableSafeAreaInsets;
  }), 2);
  closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = React.useEffect(() => callback(dependencyMap[6])(() => {
    let DEFAULT_APP_ENTRY_KEY = closure_0;
    if (closure_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(closure_1_2[2]).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = closure_1_1(closure_1_2[4]).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = closure_1_1(closure_1_2[4]);
    } else {
      stableSafeAreaInsets = appEntryKey(closure_1_2[5]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = appEntryKey(closure_1_2[5]);
    }
    callback(stableSafeAreaInsets);
    obj = appEntryKey(closure_1_2[3]);
  }, appEntryKey), items);
  return tmp2[0];
};
export const getStableSafeAreaInsets = function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = enforcingDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  } else {
    stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const tmp3Result = useSafeAreaInsets;
  }
  return stableSafeAreaInsets;
};