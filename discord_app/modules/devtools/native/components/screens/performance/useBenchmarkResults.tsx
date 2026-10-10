// === Module 16088: useBenchmarkResults ===

// Module 16088 (useBenchmarkResults)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useBenchmarkResults() {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [tmp4, require] = noop.useState(first);
  closure_1 = noop.useRef(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(label, elapsedMs) {
      label((arg0) => {
        elapsedMs.current = elapsedMs.current + 1;
        const items = [{ kind: "mount", id: elapsedMs.current, label, elapsedMs }, ...arg0];
        return items;
      });
    };
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k(arg0) {
      closure_0 = arg0;
      closure_0((arg0) => {
        ref.current = ref.current + 1;
        const merged = Object.assign(closure_0);
        const items = [{ kind: "scroll", id: ref.current }, ...arg0];
        return items;
      });
    };
    cResult[2] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      return require([]);
    };
    cResult[3] = fn3;
    let tmp7 = fn3;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const obj2 = { results: tmp4, addMount: tmp5, addScroll: tmp6, clear: tmp7 };
    cResult[4] = tmp4;
    cResult[5] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : (function useBenchmarkResults() {
  const tmp = _slicedToArray(noop.useState([]), 2);
  closure_0 = tmp[1];
  closure_1 = noop.useRef(0);
  return {
    results: tmp[0],
    addMount: noop.useCallback((label, elapsedMs) => {
      label((arg0) => {
        const obj = { kind: "mount", id: +elapsedMs.current, label, elapsedMs };
        elapsedMs.current = +elapsedMs.current + 1;
        const items = [obj, ...arg0];
        return items;
      });
    }, []),
    addScroll: noop.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => {
        const obj = { kind: "scroll", id: +ref.current };
        ref.current = +ref.current + 1;
        const merged = Object.assign(closure_0);
        const items = [obj, ...arg0];
        return items;
      });
    }, []),
    clear: noop.useCallback(() => closure_0([]), [])
  };
});