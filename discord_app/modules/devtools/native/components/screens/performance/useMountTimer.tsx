// === Module 15627: useMountTimer ===

// Module 15627 (useMountTimer)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  [tmp3, require] = noop.useState(null);
  noop.useRef(0);
  noop.useRef(0);
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(params) {
      const sum = ref.current + 1;
      ref.current = sum;
      closure_3.current = sum;
      closure_2.current = performance.now();
      require({ batchKey: sum, params });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(arg0) {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h(arg0) {
      if (arg0 === ref3.current) {
        tmp.current = null;
      }
    };
    cResult[2] = fn3;
    let tmp6 = fn3;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj2 = { run: tmp3, begin: first, measure: tmp5, cancel: tmp6 };
    cResult[3] = tmp3;
    cResult[4] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[4];
  }
  return tmp7;
}) : (() => {
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_0 = tmp[1];
  noop.useRef(0);
  noop.useRef(0);
  noop.useRef(null);
  return {
    run: tmp[0],
    begin: noop.useCallback((params) => {
      const sum = ref.current + 1;
      ref.current = sum;
      closure_3.current = sum;
      closure_2.current = performance.now();
      closure_0({ batchKey: sum, params });
    }, []),
    measure: noop.useCallback((arg0) => {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    }, []),
    cancel: noop.useCallback((arg0) => {
      if (arg0 === ref3.current) {
        tmp.current = null;
      }
    }, [])
  };
});