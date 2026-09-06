// === Module 1597: ? ===

// Module 1597
import equalDefault from "equal" /* 1559 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};