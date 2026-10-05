// _runtime/01604_react.js
import equalDefault from "01566_equal.js";
import react from "00019_react.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
