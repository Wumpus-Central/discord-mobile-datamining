// === Module 13388: WishlistAnalyticsContext ===

// Module 13388 (WishlistAnalyticsContext)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useWishlistAnalyticsContext() {
  return noop.useContext(context);
}
ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/wishlists/WishlistAnalyticsContext.tsx");

export const WishlistAnalyticsContext = context;
export { useWishlistAnalyticsContext };
export const WishlistAnalyticsProvider = ReactCompilerGating.isReactCompilerEnabled() ? (function WishlistAnalyticsProvider(arg0) {
  const cResult = c.c(6);
  ({ newValue, children } = arg0);
  if (typeof useWishlistAnalyticsContext === "function") {
    context = noop.useContext(context);
    if (cResult[0] === newValue) {
      if (cResult[1] === context) {
        let tmp5 = cResult[2];
      }
      if (cResult[3] === children) {
        if (cResult[4] === tmp5) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
      const obj2 = { value: tmp5, children };
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
}) : (function WishlistAnalyticsProvider(newValue) {
  newValue = newValue.newValue;
  if (typeof useWishlistAnalyticsContext === "function") {
    const obj = {};
    const merged = Object.assign(noop.useContext(context));
    const merged1 = Object.assign(newValue);
    const obj2 = { value: obj, children: tmp };
    return <context.Provider value={obj}>{tmp}</context.Provider>;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});