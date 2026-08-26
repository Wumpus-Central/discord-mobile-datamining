// === Module 15564: useInitRef ===

// Module 15564 (useInitRef)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(arg0) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = arg0();
  }
  return tmp2;
};