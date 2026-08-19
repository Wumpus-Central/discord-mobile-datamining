// === Module 8602: useStableCallback ===

// Module 8602 (useStableCallback)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(stateFromStores) {
  const React = stateFromStores;
  closure_1 = React.useRef(stateFromStores);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = closure_0;
  });
  return React.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};