// === Module 16891: ICYMIContext ===

// Module 16891 (ICYMIContext)
import _mod19 from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const context = _mod19.createContext({ width: 0, margin: 0, inset: 0 });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMIContextConstructor() {
  const cResult = c.c(2);
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  if (cResult[0] !== bound) {
    const obj2 = { width: bound, margin: PX_16, inset: PX_16 + 38 };
    cResult[0] = bound;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
});
let closure_5 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = tmp3;
export const ICYMIContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIContextProvider(children) {
  const cResult = c.c(7);
  children = children.children;
  ({ width, margin, inset } = closure_5());
  if (cResult[0] === inset) {
    if (cResult[1] === margin) {
      if (cResult[2] === width) {
        let tmp3 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === tmp3) {
          let tmp4 = cResult[6];
        }
        return tmp4;
      }
      const obj2 = { value: tmp3, children };
      const tmp7 = <context.Provider value={tmp3}>{children}</context.Provider>;
      cResult[4] = children;
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      tmp4 = tmp7;
    }
  }
  const obj3 = { width, margin, inset };
  cResult[0] = inset;
  cResult[1] = margin;
  cResult[2] = width;
  cResult[3] = obj3;
  tmp3 = obj3;
  const tmp2 = closure_5();
}) : (function ICYMIContextProvider(children) {
  const tmp = closure_5();
  return <context.Provider value={{ width: tmp.width, margin: tmp.margin, inset: tmp.inset }}>{children.children}</context.Provider>;
});