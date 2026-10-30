// === Module 1612: ? ===

// Module 1612
import equalDefault from "equal" /* 1574 */;
import noop from "module_19" /* 19 */;


export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}