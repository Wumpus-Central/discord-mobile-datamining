// === Module 8122: useGetIsMounted ===

// Module 8122 (useGetIsMounted)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};