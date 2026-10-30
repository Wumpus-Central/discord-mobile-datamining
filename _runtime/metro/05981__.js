// === Module 5981: ? ===

// Module 5981
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