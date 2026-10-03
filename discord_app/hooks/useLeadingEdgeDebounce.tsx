// === Module 9150: useLeadingEdgeDebounce ===

// Module 9150 (useLeadingEdgeDebounce)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(4);
  noop.useRef(true);
  closure_3 = _slicedToArray(noop.useState(arg0), 2)[1];
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const effect = noop.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function s() {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    if (ref.current) {
      closure_3(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const tmp2 = _slicedToArray(noop.useState(arg0), 2);
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  noop.useRef(true);
  const tmp = _slicedToArray(noop.useState(arg0), 2);
  closure_3 = tmp[1];
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    if (ref.current) {
      closure_3(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
});