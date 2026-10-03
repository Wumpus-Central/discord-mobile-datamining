// _runtime/metro/01604__.js
import equalDefault from "../01566_equal.js";
import noop from "00019__.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
