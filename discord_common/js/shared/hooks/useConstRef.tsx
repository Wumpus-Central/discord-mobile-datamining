// === Module 7451: useConstRef ===

// Module 7451 (useConstRef)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};