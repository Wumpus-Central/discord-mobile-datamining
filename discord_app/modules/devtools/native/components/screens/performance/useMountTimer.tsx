// === Module 15184: useMountTimer ===

// Module 15184 (useMountTimer)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default function useMountTimer() {
  const tmp = callback(React.useState(null), 2);
  callback = tmp[1];
  React = React.useRef(0);
  closure_2 = React.useRef(0);
  closure_3 = React.useRef(null);
  return {
    run: tmp[0],
    begin: React.useCallback((params) => {
      const sum = ref.current + 1;
      ref.current = sum;
      closure_3.current = sum;
      closure_2.current = performance.now();
      callback({ batchKey: sum, params });
    }, []),
    measure: React.useCallback((arg0) => {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    }, []),
    cancel: React.useCallback((arg0) => {
      if (arg0 === ref3.current) {
        tmp.current = null;
      }
    }, [])
  };
};