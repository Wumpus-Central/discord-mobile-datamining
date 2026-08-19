// === Module 7449: useConstRef ===

// Module 7449 (useConstRef)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};