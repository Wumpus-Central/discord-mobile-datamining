// === Module 7625: useInterval ===

// Module 7625 (useInterval)
import noop from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

({ useEffect: c2, useRef: c3 } = noop);
const result = size.fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(current, MINUTE) {
  closure_1 = MINUTE;
  closure_2 = ref(current);
  ref = ref(null);
  const items = [current];
  closure_2(() => {
    closure_2.current = current;
  }, items);
  const items1 = [MINUTE];
  closure_2(() => {
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(function tick() {
        closure_0(closure_1[1])(null != ref.current, "Missing callback");
        ref.current();
      }, tmp);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
};