// discord_app/modules/screen/useWindowDimensions.native.tsx
import c from "../../../_runtime/00576_c.js";
import AppEntryKeyContext from "../window/native/AppEntryKeyContext.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DimensionsStore from "native/DimensionsStore.android.tsx";

require = fn;
let closure_4 = { ignoreKeyboard: false };
function WINDOW_DIMENSIONS_GETTER(arg0) {}
function WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD(arg0) {}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useWindowDimensions(arg0) {
      let tmp = arg0;
      const cResult = c.c(3);
      if (undefined === arg0) {
        tmp = closure_4;
      }
      ({ ignoreKeyboard, appEntryKey } = tmp);
      if (appEntryKey == null) {
        appEntryKey = tmp2Result.useAppEntryKey();
      }
      if (cResult[0] === appEntryKey) {
        if (cResult[1] === tmp5) {
          return DimensionsStore(cResult[2]);
        }
      }
      if (undefined !== ignoreKeyboard && ignoreKeyboard) {
        if (typeof WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD === "function") {
          let fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
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
      tmp2Result = AppEntryKeyContext;
    }
  : function useWindowDimensions() {
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
      return DimensionsStore(
        noop.useMemo(() => {
          if (flag) {
            if (typeof WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD === "function") {
              closure_0 = appEntryKey;
              let fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
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
        }, items),
      );
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
  const tmp2 = DimensionsStore.getState().byAppEntry[str];
  return flag ? tmp2.windowDimensionsIgnoringKeyboard : tmp2.windowDimensions;
};
