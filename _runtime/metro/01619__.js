// _runtime/metro/01619__.js
import equalDefault from "../01581_equal.js";
import noop from "00019__.js";

export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
