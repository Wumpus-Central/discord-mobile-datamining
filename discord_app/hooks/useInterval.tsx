// === Module 6806: useInterval ===

// Module 6806 (useInterval)
import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);
const result = require("set").fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const callback = callback2(arg0);
  callback2 = callback2(null);
  const items = [arg0];
  callback(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1];
  callback(() => {
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        outer1_0(outer1_1[1])(null != ref.current, "Missing callback");
        ref.current();
      }, tmp);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(tmp2.current);
      tmp2.current = null;
    }
  }, items1);
};