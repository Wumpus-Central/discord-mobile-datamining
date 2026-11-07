// _runtime/metro/06118__.js
import noop from "00019__.js";

({ useEffect: closure_0, useRef: closure_1 } = noop);

export function usePrevious(current) {
  const tmp = duration(undefined);
  closure_1 = tmp;
  React(() => {
    closure_1.current = current;
  });
  return tmp.current;
}
