// === Module 16395: ICYMIContext ===

// Module 16395 (ICYMIContext)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const createContext = react.createContext;
const jsx = Fragment.jsx;
const context = createContext({ width: 0, margin: 0, inset: 0 });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  if (cResult[0] !== bound) {
    const obj2 = { width: bound, margin: PX_16, inset: PX_16 + 38 };
    cResult[0] = bound;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
});
let closure_5 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let inset;
  let margin;
  let width;
  const obj = react2;
  const cResult = obj.c(7);
  children = children.children;
  ({ width, margin, inset } = closure_5());
  closure_5();
  if (cResult[0] === inset) {
    if (cResult[1] === margin) {
      let tmp3;
      if (cResult[2] === width) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === children) {
        let tmp4;
        if (cResult[5] === tmp3) {
          tmp4 = cResult[6];
        }
        return tmp4;
      }
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
}) : ((children) => {
  children = children.children;
  const tmp = closure_5();
  return <context.Provider value={{ width: tmp.width, margin: tmp.margin, inset: tmp.inset }}>{children}</context.Provider>;
});
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = tmp3;
export const ICYMIContextProvider = tmp4;