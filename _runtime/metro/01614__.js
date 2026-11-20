// === Module 1614: ? ===

// Module 1614
import equalDefault from "equal" /* 1576 */;
import noop from "module_19" /* 19 */;


export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}