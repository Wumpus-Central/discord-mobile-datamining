// === Module 8902: usePrevValue ===

// Module 8902 (usePrevValue)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const result = obj132.fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};