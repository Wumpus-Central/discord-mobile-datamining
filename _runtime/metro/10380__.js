// === Module 10380: ? ===

// Module 10380
import _mod19 from "module_19" /* 19 */;
import _modDef10381 from "module_10381" /* 10381 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(cResult, cResult2) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  } else if (!_modDef10381(cResult2, tmp2.current)) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  }
  return tmp.current;
};