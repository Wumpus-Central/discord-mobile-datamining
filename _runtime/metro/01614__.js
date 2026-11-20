// _runtime/metro/01614__.js
import equalDefault from "../01576_equal.js";
import noop from "00019__.js";

export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
