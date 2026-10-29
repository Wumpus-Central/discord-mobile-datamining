// _runtime/metro/01526__.js
import noop from "00019__.js";

export function useLazyValue(fn) {
  const ref = noop.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}
