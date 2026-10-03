// === Module 1513: ? ===

// Module 1513
import noop from "module_19" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = noop.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};