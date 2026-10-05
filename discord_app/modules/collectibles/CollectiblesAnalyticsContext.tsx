// === Module 8421: CollectiblesAnalyticsContext ===

// Module 8421 (CollectiblesAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useCollectiblesAnalyticsContext = () => react.useContext(context);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let newValue;
  const obj = react2;
  const cResult = obj.c(6);
  ({ newValue, children } = arg0);
  if (typeof fn === "function") {
    context = react.useContext(context);
    if (cResult[0] === newValue) {
      let tmp5;
      if (cResult[1] === context) {
        tmp5 = cResult[2];
      }
      if (cResult[3] === children) {
        let tmp12;
        if (cResult[4] === tmp5) {
          tmp12 = cResult[5];
        }
        return tmp12;
      }
      const tmp14 = <tmp3.Provider value={tmp5}>{children}</tmp3.Provider>;
      cResult[3] = children;
      cResult[4] = tmp5;
      cResult[5] = tmp14;
      tmp12 = tmp14;
    }
    const obj3 = {};
    const merged = Object.assign(context);
    const merged1 = Object.assign(newValue);
    cResult[0] = newValue;
    cResult[1] = context;
    cResult[2] = obj3;
    tmp5 = obj3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((newValue) => {
  newValue = newValue.newValue;
  context = undefined;
  if (typeof fn === "function") {
    context = react.useContext(context);
    const items = [context, newValue];
    return <context.Provider value={react.useMemo(() => {
      const obj = {};
      const merged = Object.assign(context);
      const merged1 = Object.assign(newValue);
      return obj;
    }, items)}>{tmp}</context.Provider>;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const result1 = size.fileFinishedImporting("modules/collectibles/CollectiblesAnalyticsContext.tsx");

export const CollectiblesAnalyticsContext = context;
export { useCollectiblesAnalyticsContext };
export const CollectiblesAnalyticsProvider = tmp4;