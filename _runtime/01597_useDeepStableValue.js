// _runtime/01597_useDeepStableValue.js
import equalDefault from "01559_equal.js";
import closure_2 from "00019_noop.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
