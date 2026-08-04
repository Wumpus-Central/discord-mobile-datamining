import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("FRAME_BUDGET_MS").fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(stateFromStores) {
  let closure_0 = stateFromStores;
  const monitoring = callback(React.useState(false), 2);
  let closure_1 = monitoring[1];
  callback = React.useRef(null);
  React = React.useRef(stateFromStores);
  const items = [stateFromStores];
  const effect = React.useEffect(() => {
    noop.current = closure_0;
  }, items);
  const start = React.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = stateFromStores(14947).startFrameMonitor();
    dependencyMap(true);
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