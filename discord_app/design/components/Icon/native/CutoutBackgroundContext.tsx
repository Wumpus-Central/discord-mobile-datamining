// discord_app/design/components/Icon/native/CutoutBackgroundContext.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import useToken from "../../../tokens/native/useToken.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const shared_colors = obj(8471);
require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const useCutoutBackgroundColor = () => noop.useContext(closure_5);
fn(558);
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (BACKGROUND_BASE_LOW) => {
      const internal = nativeDefault.internal;
      let tmp2;
      if (internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
        tmp2 = BACKGROUND_BASE_LOW;
      }
      let token = useToken.useToken(tmp2);
      let tmp4 = null;
      if (null !== BACKGROUND_BASE_LOW) {
        if (typeof BACKGROUND_BASE_LOW === "string") {
          token = BACKGROUND_BASE_LOW;
        }
        tmp4 = token;
      }
      return tmp4;
    }
  : (BACKGROUND_BASE_LOW) => {
      const internal = nativeDefault.internal;
      let tmp2;
      if (internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
        tmp2 = BACKGROUND_BASE_LOW;
      }
      let token = useToken.useToken(tmp2);
      let tmp4 = null;
      if (null !== BACKGROUND_BASE_LOW) {
        if (typeof BACKGROUND_BASE_LOW === "string") {
          token = BACKGROUND_BASE_LOW;
        }
        tmp4 = token;
      }
      return tmp4;
    };
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export { useCutoutBackgroundColor };
export const CutoutBackgroundProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let obj = require;
      let result = dependencyMap;
      const cResult = c.c(6);
      children = children.children;
      if (typeof fn === "function") {
        const context = noop.useContext(redux);
        const tmp8 = closure_7(tmp3);
        if (null != tmp8) {
          let num = 1;
          let tmp10 = tmp8;
          if (1 !== obj3.alpha()) {
            if (null != context) {
              if (cResult[0] === context) {
              }
              obj = shared_colors;
              result = obj.flattenColorOverOpaqueBackground(tmp8, context);
              cResult[0] = context;
              cResult[num] = tmp8;
              num = 2;
              cResult[2] = result;
            }
          }
          obj3 = _modDef683(tmp8);
        } else if (undefined === tmp8) {
          tmp10 = context;
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp10) {
            let tmp15 = cResult[5];
          }
          return tmp15;
        }
        const obj4 = { value: tmp10, children };
        const tmp17 = <redux.Provider value={tmp10}>{children}</redux.Provider>;
        cResult[3] = children;
        cResult[4] = tmp10;
        cResult[5] = tmp17;
        tmp15 = tmp17;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : (arg0) => {
      if (typeof fn === "function") {
        const context = noop.useContext(redux);
        const tmp7 = closure_7(tmp);
        if (null != tmp7) {
          let result = tmp7;
          if (1 !== obj.alpha()) {
            if (null != context) {
              result = shared_colors.flattenColorOverOpaqueBackground(tmp7, context);
            }
          }
          obj = _modDef683(tmp7);
        } else if (undefined === tmp7) {
          result = context;
        }
        const obj3 = { value: result, children: tmp2 };
        return <redux.Provider value={result}>{tmp2}</redux.Provider>;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
