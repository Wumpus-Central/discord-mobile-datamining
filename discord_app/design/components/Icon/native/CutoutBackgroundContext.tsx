// discord_app/design/components/Icon/native/CutoutBackgroundContext.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import useToken from "../../../tokens/native/useToken.tsx";
import colors from "../../../utils/shared/colors.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useCutoutBackgroundColor = () => react.useContext(redux);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(6);
      children = children.children;
      if (typeof fn === "function") {
        let tmp11;
        const context = react.useContext(redux);
        const tmp9 = closure_7(tmp4);
        if (null != tmp9) {
          tmp11 = tmp9;
          const obj2 = _modDef683(tmp9);
          if (1 !== obj2.alpha()) {
            if (null != context) {
              if (cResult[0] === context) {
                let tmp14;
                if (cResult[1] === tmp9) {
                  tmp14 = cResult[2];
                }
                tmp11 = tmp14;
              }
              const tmpResult = colors;
              const result = tmpResult.flattenColorOverOpaqueBackground(tmp9, context);
              cResult[0] = context;
              cResult[1] = tmp9;
              cResult[2] = result;
              tmp14 = result;
            }
          }
        } else if (undefined === tmp9) {
          tmp11 = context;
        }
        if (cResult[3] === children) {
          let tmp16;
          if (cResult[4] === tmp11) {
            tmp16 = cResult[5];
          }
          return tmp16;
        }
        const tmp18 = <redux.Provider value={tmp11}>{children}</redux.Provider>;
        cResult[3] = children;
        cResult[4] = tmp11;
        cResult[5] = tmp18;
        tmp16 = tmp18;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : (arg0) => {
      if (typeof fn === "function") {
        let result;
        const context = react.useContext(redux);
        const tmp7 = closure_7(tmp);
        if (null != tmp7) {
          result = tmp7;
          const obj = _modDef683(tmp7);
          if (1 !== obj.alpha()) {
            if (null != context) {
              const obj2 = colors;
              result = obj2.flattenColorOverOpaqueBackground(tmp7, context);
            }
          }
        } else if (undefined === tmp7) {
          result = context;
        }
        return <redux.Provider value={result}>{tmp2}</redux.Provider>;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (BACKGROUND_BASE_LOW) => {
      const internal = nativeDefault.internal;
      let tmp2;
      if (internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
        tmp2 = BACKGROUND_BASE_LOW;
      }
      const obj = useToken;
      let token = obj.useToken(tmp2);
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
      const obj = useToken;
      let token = obj.useToken(tmp2);
      let tmp4 = null;
      if (null !== BACKGROUND_BASE_LOW) {
        if (typeof BACKGROUND_BASE_LOW === "string") {
          token = BACKGROUND_BASE_LOW;
        }
        tmp4 = token;
      }
      return tmp4;
    };
const result1 = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export { useCutoutBackgroundColor };
export const CutoutBackgroundProvider = tmp3;
