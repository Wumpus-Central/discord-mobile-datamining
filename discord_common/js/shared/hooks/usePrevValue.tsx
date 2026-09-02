// === Module 9243: usePrevValue ===

// Module 9243 (usePrevValue)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};