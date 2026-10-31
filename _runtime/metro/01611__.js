// === Module 1611: ? ===

// Module 1611
import equalDefault from "equal" /* 1573 */;
import noop from "module_19" /* 19 */;


export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}