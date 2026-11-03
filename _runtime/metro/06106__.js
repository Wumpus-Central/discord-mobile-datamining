// === Module 6106: ? ===

// Module 6106
import noop from "module_19" /* 19 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);

export function usePrevious(current) {
  const tmp = duration(undefined);
  closure_1 = tmp;
  React(() => {
    closure_1.current = current;
  });
  return tmp.current;
}