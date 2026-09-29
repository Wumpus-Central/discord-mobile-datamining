// === Module 7028: ? ===

// Module 7028
import _mod19 from "module_19" /* 19 */;
import _modDef7029 from "module_7029" /* 7029 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(fn, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = fn();
    tmp2.current = items;
  } else if (!_modDef7029(items, tmp2.current)) {
    tmp.current = fn();
    tmp2.current = items;
  }
  return tmp.current;
};