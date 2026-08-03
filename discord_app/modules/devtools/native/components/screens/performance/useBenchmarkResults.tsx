// === Module 14916: useBenchmarkResults ===

// Module 14916 (useBenchmarkResults)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  const tmp = callback(React.useState([]), 2);
  callback = tmp[1];
  React = React.useRef(0);
  return {
    results: tmp[0],
    addMount: React.useCallback((arg0, arg1) => {
      const callback = arg0;
      let noop = arg1;
      callback((arg0) => {
        ref.current = +ref.current + 1;
        const items = [{ kind: "mount", id: tmp, label: _slicedToArray, elapsedMs: ref }, ...arg0];
        return items;
      });
    }, []),
    addScroll: React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        outer1_1.current = +outer1_1.current + 1;
        const merged = Object.assign(_slicedToArray);
        const items = [{ kind: "scroll", id: tmp }, ...arg0];
        return items;
      });
    }, []),
    clear: React.useCallback(() => callback([]), [])
  };
};