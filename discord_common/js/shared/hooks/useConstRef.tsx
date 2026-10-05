// === Module 7181: react ===

// Module 7181 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = react.useRef(current);
  ref.current = current;
  return ref;
};