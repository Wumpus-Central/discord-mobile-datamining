// === Module 6951: ? ===

// Module 6951
import _mod19 from "module_19" /* 19 */;
import _modDef6952 from "module_6952" /* 6952 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(S, cResult) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = S();
    tmp2.current = cResult;
  } else if (!_modDef6952(cResult, tmp2.current)) {
    tmp.current = S();
    tmp2.current = cResult;
  }
  return tmp.current;
};