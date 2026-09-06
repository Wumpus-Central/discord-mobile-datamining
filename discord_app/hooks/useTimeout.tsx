// === Module 10755: useTimeout ===

// Module 10755 (useTimeout)
import noop from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);
const result = size.fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(current, arg1) {
  closure_1 = arg1;
  const tmp = framebus(current);
  closure_2 = tmp;
  const items = [current];
  React(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1, tmp];
  React(() => {
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
};