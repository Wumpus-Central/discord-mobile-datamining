// _runtime/01523_useLazyValue.js
import noop from "00019_noop.js";


export const useLazyValue = function useLazyValue(fn) {
  const ref = React.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};