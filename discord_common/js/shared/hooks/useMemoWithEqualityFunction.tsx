// === Module 15389: useMemoWithEqualityFunction ===

// Module 15389 (useMemoWithEqualityFunction)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import useInitRefDefault from "useInitRef" /* 15390 */;

const useRef = noop.useRef;
let closure_3 = Symbol();
const result = obj132.fileFinishedImporting("../discord_common/js/shared/hooks/useMemoWithEqualityFunction.tsx");

export default function useMemoWithEqualityFunction(fn, current, fn2) {
  const tmp = useInitRefDefault(fn);
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp2.current = current;
  } else if (!fn2(tmp2.current, current)) {
    tmp.current = fn();
    tmp2.current = current;
  }
  return tmp.current;
};