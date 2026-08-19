// === Module 15390: useInitRef ===

// Module 15390 (useInitRef)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const result = obj132.fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(fn) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = fn();
  }
  return tmp2;
};