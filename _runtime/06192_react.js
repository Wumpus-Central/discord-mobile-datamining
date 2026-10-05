// === Module 6192: react ===

// Module 6192 (react)
import react from "react" /* 19 */;

let tmp3 = typeof window === "undefined";
if (!tmp3) {
  const _window2 = window;
  tmp3 = undefined === window.document;
}
if (!tmp3) {
  const _window = window;
  tmp3 = undefined === window.document.createElement;
}
let tmp4 = typeof navigator !== "undefined";
if (typeof navigator !== "undefined") {
  const _navigator = navigator;
  tmp4 = "ReactNative" === navigator.product;
}
if (tmp3) {
  let useLayoutEffect;
  if (!tmp4) {
    useLayoutEffect = react.useEffect;
  }
  exports.useIsomorphicLayoutEffect = useLayoutEffect;
}
useLayoutEffect = react.useLayoutEffect;