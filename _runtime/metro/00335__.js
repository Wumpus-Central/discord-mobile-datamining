// === Module 335: ? ===

// Module 335
import noop from "module_19" /* 19 */;

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
};