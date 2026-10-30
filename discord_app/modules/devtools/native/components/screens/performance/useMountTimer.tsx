// discord_app/modules/devtools/native/components/screens/performance/useMountTimer.tsx
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default function useMountTimer() {
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
    }, []),
  };
}
