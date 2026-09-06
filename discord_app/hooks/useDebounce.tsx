// === Module 13449: useDebounce ===

// Module 13449 (useDebounce)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const tmp = _slicedToArray(noop.useState(arg0), 2);
  closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, closure_1);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};