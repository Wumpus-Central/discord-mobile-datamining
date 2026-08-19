// === Module 15185: useFrameMonitor ===

// Module 15185 (useFrameMonitor)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(stateFromStores) {
  closure_0 = stateFromStores;
  const monitoring = callback(React.useState(false), 2);
  closure_1 = monitoring[1];
  callback = React.useRef(null);
  React = React.useRef(stateFromStores);
  const items = [stateFromStores];
  const effect = React.useEffect(() => {
    closure_3.current = closure_0;
  }, items);
  const start = React.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = stateFromStores(15183).startFrameMonitor();
    dependencyMap(true);
    const obj = stateFromStores(15183);
  }, []);
  const stop = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      dependencyMap(false);
      ref2.current(current.stop());
      const stopResult = current.stop();
    }
  }, []);
  const effect1 = React.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = null;
  }, []);
  return { monitoring: monitoring[0], start, stop };
};