// === Module 15732: useFrameMonitor ===

// Module 15732 (useFrameMonitor)
import startFrameMonitor from "startFrameMonitor" /* 15730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(set) {
  let current = set;
  const monitoring = _slicedToArray(noop.useState(false), 2);
  closure_1 = monitoring[1];
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(set);
  const items = [set];
  const effect = noop.useEffect(() => {
    closure_3.current = current;
  }, items);
  const start = noop.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = startFrameMonitor.startFrameMonitor();
    closure_1(true);
  }, []);
  const stop = noop.useCallback(() => {
    current = ref.current;
    if (null != current) {
      ref.current = null;
      closure_1(false);
      ref2.current(current.stop());
      const stopResult = current.stop();
    }
  }, []);
  const effect1 = noop.useEffect(() => () => {
    current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = null;
  }, []);
  return { monitoring: monitoring[0], start, stop };
};