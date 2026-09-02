// === Module 1612: useDeepStableValue ===

// Module 1612 (useDeepStableValue)
import equalDefault from "equal" /* 1574 */;
import closure_2 from "noop" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};