// discord_app/hooks/useGetIsMounted.tsx
import noop from "../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};