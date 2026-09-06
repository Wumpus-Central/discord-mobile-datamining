// _runtime/01506_useLazyValue.js
import closure_0 from "00019_noop.js";

export const useLazyValue = function useLazyValue(arg0) {
  const ref = React.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = arg0();
  }
  return ref.current;
};
