// === Module 7737: useTimeout ===

// Module 7737 (useTimeout)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

({ useEffect: c0, useRef: closure_1 } = noop);
const result = set.fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(arg0, arg1) {
  const callback = arg0;
  const callback2 = arg1;
  const tmp = callback2(arg0);
  closure_2 = tmp;
  const items = [arg0];
  callback(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1, tmp];
  callback(() => {
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
};