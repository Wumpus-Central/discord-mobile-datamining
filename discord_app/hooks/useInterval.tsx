// === Module 7161: useInterval ===

// Module 7161 (useInterval)
import noop from "module_19" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useEffect: c3, useRef: closure_4 } = noop);
const result = size.fileFinishedImporting("hooks/useInterval.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useInterval(current, arg1) {
  _require = current;
  closure_1 = arg1;
  const cResult = require("c").c(6);
  dependencyMap = closure_4(current);
  const ref = closure_4(null);
  if (cResult[0] !== current) {
    const fn = function c() {
      closure_2.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  ref(tmp2, tmp3);
  if (cResult[3] !== arg1) {
    const fn2 = function f() {
      if (null !== closure_1) {
        const _setInterval = setInterval;
        ref.current = setInterval(function tick() {
          closure_1(ref[3])(null != ref.current, "Missing callback");
          ref.current();
        }, tmp);
        return () => clearInterval(ref2.current);
      } else if (null !== ref.current) {
        const _clearInterval = clearInterval;
        clearInterval(ref.current);
        ref.current = null;
      }
    };
    const items1 = [arg1];
    cResult[3] = arg1;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp7 = items1;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  ref(tmp6, tmp7);
}) : (function useInterval(current, arg1) {
  closure_1 = arg1;
  closure_2 = closure_4(current);
  const ref = closure_4(null);
  const items = [current];
  ref(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1];
  ref(() => {
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(function tick() {
        closure_1(ref[3])(null != ref.current, "Missing callback");
        ref.current();
      }, tmp);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
});