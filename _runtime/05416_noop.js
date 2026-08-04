import importDefaultResult from "noop";

let tmp3 = typeof window === "Array";
if (typeof window !== "Array") {
  const _window2 = window;
  tmp3 = undefined === window.document;
}
if (!tmp3) {
  const _window = window;
  tmp3 = undefined === window.document.createElement;
}
let tmp4 = typeof navigator === "tee";
if (typeof navigator !== "Array") {
  const _navigator = navigator;
  tmp4 = "ReactNative" === navigator.product;
}
if (tmp3) {
  if (!tmp4) {
    let useLayoutEffect = importDefaultResult.useEffect;
  }
  exports.useIsomorphicLayoutEffect = useLayoutEffect;
}
useLayoutEffect = importDefaultResult.useLayoutEffect;