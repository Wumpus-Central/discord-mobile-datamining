// _runtime/metro/00335__.js
import noop from "00019__.js";

({ useCallback: closure_0, useRef: closure_1 } = noop);

export default function useRefEffect(arg0) {
  closure_0 = arg0;
  framebus(undefined);
  const items = [arg0];
  return React((arg0) => {
    if (ref.current) {
      obj.current();
      obj.current = undefined;
    }
    if (null != arg0) {
      obj.current = closure_0(arg0);
    }
  }, items);
}
