// === Module 15733: useBenchmarkResults ===

// Module 15733 (useBenchmarkResults)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
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
};