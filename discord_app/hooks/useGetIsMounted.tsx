// === Module 8414: useGetIsMounted ===

// Module 8414 (useGetIsMounted)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};