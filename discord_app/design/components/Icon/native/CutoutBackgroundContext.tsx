// === Module 8470: CutoutBackgroundContext ===

// Module 8470 (CutoutBackgroundContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4580 */;
import colors from "colors" /* 8471 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useCutoutBackgroundColor = () => react.useContext(redux);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
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
}) : ((arg0) => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((BACKGROUND_BASE_LOW) => {
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
}) : ((BACKGROUND_BASE_LOW) => {
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
});
const result1 = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export { useCutoutBackgroundColor };
export const CutoutBackgroundProvider = tmp3;