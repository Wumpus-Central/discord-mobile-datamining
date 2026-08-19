// === Module 15186: useBenchmarkResults ===

// Module 15186 (useBenchmarkResults)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  const tmp = callback(React.useState([]), 2);
  callback = tmp[1];
  React = React.useRef(0);
  return {
    results: tmp[0],
    addMount: React.useCallback((arg0, arg1) => {
      const callback = arg0;
      closure_1 = arg1;
      callback((arg0) => {
        ref.current = +ref.current + 1;
        const items = [{ kind: "mount", id: tmp, label: closure_0, elapsedMs: ref }, ...arg0];
        return items;
      });
    }, []),
    addScroll: React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        closure_1_1.current = +closure_1_1.current + 1;
        const merged = Object.assign(closure_0);
        const items = [{ kind: "scroll", id: tmp }, ...arg0];
        return items;
      });
    }, []),
    clear: React.useCallback(() => callback([]), [])
  };
};