// _runtime/metro/01598__.js
import equalDefault from "../01560_equal.js";
import noop from "00019__.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
