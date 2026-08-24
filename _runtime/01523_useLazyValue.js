// === Module 1523: useLazyValue ===

// Module 1523 (useLazyValue)
import closure_0 from "noop" /* 19 */;


export const useLazyValue = function useLazyValue(arg0) {
  const ref = React.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = arg0();
  }
  return ref.current;
};