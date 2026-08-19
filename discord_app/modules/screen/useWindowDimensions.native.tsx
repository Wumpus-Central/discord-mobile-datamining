// === Module 1494: useWindowDimensions ===

// Module 1494 (useWindowDimensions)
import noop from "noop" /* 19 */;
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry" /* 1495 */;

const require = fn;
let closure_4 = { ignoreKeyboard: false };
const result = require("obj132").fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default function useWindowDimensions() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let appEntryKey;
  if (appEntryKey == null) {
    appEntryKey = obj.useAppEntryKey();
  }
  const items = [flag, appEntryKey];
  return state(React.useMemo(() => {
    if (closure_0) {
      closure_0 = appEntryKey;
      let fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
    } else {
      closure_0 = appEntryKey;
      fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensions;
    }
    return fn;
  }, items));
};
export const getWindowDimensions = function getWindowDimensions(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let str = tmp.appEntryKey;
  if (str === undefined) {
    str = "main";
  }
  const tmp2 = state.getState().byAppEntry[str];
  return flag ? tmp2.windowDimensionsIgnoringKeyboard : tmp2.windowDimensions;
};