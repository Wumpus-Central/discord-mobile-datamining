// === Module 1615: ? ===

// Module 1615
import equalDefault from "equal" /* 1577 */;
import noop from "module_19" /* 19 */;


export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}