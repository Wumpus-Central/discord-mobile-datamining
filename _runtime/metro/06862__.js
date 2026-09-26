// === Module 6862: ? ===

// Module 6862
import _mod19 from "module_19" /* 19 */;
import _modDef6863 from "module_6863" /* 6863 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(fn, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = fn();
    tmp2.current = items;
  } else if (!_modDef6863(items, tmp2.current)) {
    tmp.current = fn();
    tmp2.current = items;
  }
  return tmp.current;
};