// === Module 11797: useLatch ===

// Module 11797 (useLatch)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(5);
  noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(current) {
      closure_1.current = current;
      return current;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn2 = function s() {
      if (ref.current) {
        tmp.current = false;
        closure_0();
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn2;
    let tmp3 = fn2;
  } else {
    tmp3 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj2 = { setLatch: first, tryCallback: tmp3 };
    cResult[3] = tmp3;
    cResult[4] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[4];
  }
  return tmp4;
}) : ((arg0) => {
  closure_0 = arg0;
  noop.useRef(false);
  const obj = {
    setLatch: noop.useCallback((current) => {
      closure_1.current = current;
      return current;
    }, []),
    tryCallback: null
  };
  const items = [arg0];
  obj.tryCallback = noop.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      closure_0();
    }
  }, items);
  return obj;
});