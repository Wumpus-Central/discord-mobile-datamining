// === Module 1523: useLazyValue ===

// Module 1523 (useLazyValue)
import noop from "noop" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = React.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};