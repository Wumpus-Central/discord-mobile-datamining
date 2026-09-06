// === Module 9798: usePrevValue ===

// Module 9798 (usePrevValue)
import _mod19 from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

const useRef = _mod19.useRef;
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};