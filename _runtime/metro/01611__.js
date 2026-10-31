// _runtime/metro/01611__.js
import equalDefault from "../01573_equal.js";
import noop from "00019__.js";

export function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
