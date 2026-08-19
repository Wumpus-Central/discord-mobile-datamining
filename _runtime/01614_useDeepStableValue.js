// === Module 1614: useDeepStableValue ===

// Module 1614 (useDeepStableValue)
import equalDefault from "equal" /* 1576 */;
import noop from "noop" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};