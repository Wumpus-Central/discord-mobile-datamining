// _runtime/metro/01597__.js
import equalDefault from "../01559_equal.js";
import noop from "00019__.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
