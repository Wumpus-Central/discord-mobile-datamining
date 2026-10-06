// === Module 11797: useLatch ===

// Module 11797 (useLatch)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp3;
  let tmp4;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(5);
  let closure_1 = react.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(current) {
      ref.current = current;
      return current;
    };
    cResult[0] = fn;
    first = fn;
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
    tmp3 = fn2;
  } else {
    tmp3 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj2 = { setLatch: first, tryCallback: tmp3 };
    cResult[3] = tmp3;
    cResult[4] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[4];
  }
  return tmp4;
}) : ((arg0) => {
  let items;
  let closure_0 = arg0;
  let closure_1 = react.useRef(false);
  const obj = {
    setLatch: react.useCallback((current) => {
      ref.current = current;
      return current;
    }, []),
    tryCallback: react.useCallback(() => {
      if (ref.current) {
        tmp.current = false;
        closure_0();
      }
    }, items)
  };
  items = [arg0];
  return obj;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default tmp2;