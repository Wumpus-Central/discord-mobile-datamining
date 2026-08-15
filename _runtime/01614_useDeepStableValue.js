// _runtime/01614_useDeepStableValue.js
import noop from "noop";
import { equal } from "01576_equal.js";


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equal(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};