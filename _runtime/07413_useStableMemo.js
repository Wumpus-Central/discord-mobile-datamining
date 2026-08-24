// === Module 7413: useStableMemo ===

// Module 7413 (useStableMemo)
import noop from "noop" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 7414 */;

const useRef = noop.useRef;
let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!areHookInputsEqualDefault(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};