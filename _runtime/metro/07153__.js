// _runtime/metro/07153__.js
import _mod19 from "00019__.js";
import _modDef7154 from "07154__.js";

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(cResult, cResult2) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  } else if (!_modDef7154(cResult2, tmp2.current)) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  }
  return tmp.current;
}
