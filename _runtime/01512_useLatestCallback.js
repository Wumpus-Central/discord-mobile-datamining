// === Module 1512: useLatestCallback ===

// Module 1512 (useLatestCallback)
import react from "react" /* 19 */;

if (typeof document !== "undefined") {
  let useEffect = react.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = react.useEffect;
}

export default function useLatestCallback(arg0) {
  let closure_0 = arg0;
  let closure_1 = react.useRef(arg0);
  let current = react.useRef(function latestCallback() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    current = ref.current;
    return current.apply(this, items);
  }).current;
  useEffect(() => {
    ref.current = current;
  });
  return current;
};