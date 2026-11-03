// === Module 1522: ? ===

// Module 1522
import noop from "module_19" /* 19 */;


export function useLazyValue(fn) {
  const ref = noop.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}