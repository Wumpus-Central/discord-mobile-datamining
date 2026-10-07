// === Module 1604: ? ===

// Module 1604
import equalDefault from "equal" /* 1566 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};