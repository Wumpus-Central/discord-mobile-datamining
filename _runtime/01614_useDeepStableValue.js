// _runtime/01614_useDeepStableValue.js
import equalDefault from "01576_equal.js";
import noop from "00019_noop.js";


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};