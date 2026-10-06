// _runtime/06964_useStableMemo.js
import react from "00019_react.js";
import areHookInputsEqualDefault from "06965_areHookInputsEqual.js";

const useRef = react.useRef;
let closure_3 = [];

export default function useStableMemo(S, cResult) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = S();
    tmp2.current = cResult;
  } else if (!areHookInputsEqualDefault(cResult, tmp2.current)) {
    tmp.current = S();
    tmp2.current = cResult;
  }
  return tmp.current;
}
