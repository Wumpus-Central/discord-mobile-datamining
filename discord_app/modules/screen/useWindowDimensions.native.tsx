// === Module 1484: useWindowDimensions ===

// Module 1484 (useWindowDimensions)
import react2 from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1485 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = { ignoreKeyboard: false };
function WINDOW_DIMENSIONS_GETTER(arg0) {

}
function WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD(arg0) {

}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let appEntryKey;
  let fn;
  let ignoreKeyboard;
  let tmp = arg0;
  const obj = react2;
  const cResult = obj.c(3);
  if (undefined === arg0) {
    tmp = closure_4;
  }
  ({ ignoreKeyboard, appEntryKey } = tmp);
  const tmp2Result = AppEntryKeyContext;
  if (appEntryKey == null) {
    appEntryKey = tmp2Result.useAppEntryKey();
  }
  if (cResult[0] === appEntryKey) {
    let tmp6;
    if (cResult[1] === (undefined !== ignoreKeyboard && ignoreKeyboard)) {
      tmp6 = cResult[2];
    }
    return DimensionsStore(tmp6);
  }
  if (undefined !== ignoreKeyboard && ignoreKeyboard) {
    if (typeof WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD === "function") {
      fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (typeof WINDOW_DIMENSIONS_GETTER === "function") {
    fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensions;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  cResult[0] = appEntryKey;
  cResult[1] = undefined !== ignoreKeyboard && ignoreKeyboard;
  cResult[2] = fn;
  tmp6 = fn;
}) : (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let appEntryKey;
  const obj = flag(appEntryKey[4]);
  if (appEntryKey == null) {
    appEntryKey = obj.useAppEntryKey();
  }
  const items = [flag, appEntryKey];
  return DimensionsStore(react.useMemo(() => {
    let fn;
    if (flag) {
      if (typeof WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD === "function") {
        let closure_0 = appEntryKey;
        fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (typeof WINDOW_DIMENSIONS_GETTER === "function") {
      closure_0 = appEntryKey;
      fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensions;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    return fn;
  }, items));
});
const result = size.fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default tmp2;
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
  const tmp2 = DimensionsStore.getState().byAppEntry[str];
  return flag ? tmp2.windowDimensionsIgnoringKeyboard : tmp2.windowDimensions;
};