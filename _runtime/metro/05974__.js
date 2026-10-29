// === Module 5974: ? ===

// Module 5974
import noop from "module_19" /* 19 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);

export function usePrevious(current) {
  const tmp = framebus(undefined);
  closure_1 = tmp;
  React(() => {
    closure_1.current = current;
  });
  return tmp.current;
}