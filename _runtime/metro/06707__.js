// === Module 6707: ? ===

// Module 6707
import noop from "module_19" /* 19 */;

let tmp3 = typeof window === "undefined";
if (typeof window !== "undefined") {
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
  if (!tmp4) {
    let useLayoutEffect = noop.useEffect;
  }
  exports.useIsomorphicLayoutEffect = useLayoutEffect;
}
useLayoutEffect = noop.useLayoutEffect;