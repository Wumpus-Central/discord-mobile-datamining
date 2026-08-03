// === Module 8567: useStableCallback ===

// Module 8567 (useStableCallback)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(stateFromStores) {
  const React = stateFromStores;
  let closure_1 = React.useRef(stateFromStores);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = noop;
  });
  return React.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};