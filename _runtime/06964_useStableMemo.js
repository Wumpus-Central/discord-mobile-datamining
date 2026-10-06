// === Module 6964: useStableMemo ===

// Module 6964 (useStableMemo)
import react from "react" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 6965 */;

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
};