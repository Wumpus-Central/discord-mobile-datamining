// === Module 7164: ? ===

// Module 7164
import _mod19 from "module_19" /* 19 */;
import _modDef7165 from "module_7165" /* 7165 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(cResult, cResult2) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  } else if (!_modDef7165(cResult2, tmp2.current)) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  }
  return tmp.current;
};