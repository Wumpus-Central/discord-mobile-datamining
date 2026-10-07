// === Module 14547: useDismissOnce ===

// Module 14547 (useDismissOnce)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useDismissOnce.tsx");

export const useDismissOnce = ReactCompilerGating.isReactCompilerEnabled() ? ((current) => {
  _require = current;
  const cResult = require("c").c(6);
  dependencyMap = noop.useRef(false);
  noop = noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function s() {
      closure_2.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(AUTO_DISMISS) {
      if (!ref.current) {
        tmp.current = true;
        ref2.current(AUTO_DISMISS);
      }
    };
    cResult[3] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  closure_3 = tmp5;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return () => closure_1_3(closure_3.AUTO_DISMISS);
      }
    }
    const items1 = [tmp5];
    cResult[4] = S;
    cResult[5] = items1;
    let tmp7 = items1;
  } else {
    class S {
      constructor() {
        return () => closure_1_3(closure_3.AUTO_DISMISS);
      }
    }
    tmp7 = cResult[5];
  }
  const effect1 = obj2.useEffect(S, tmp7);
  return tmp5;
}) : ((current) => {
  noop.useRef(false);
  noop = noop.useRef(current);
  const items = [current];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  }, items);
  const callback = noop.useCallback((AUTO_DISMISS) => {
    if (!ref.current) {
      tmp.current = true;
      ref2.current(AUTO_DISMISS);
    }
  }, []);
  const items1 = [callback];
  const effect1 = noop.useEffect(() => () => closure_1_3(callback.AUTO_DISMISS), items1);
  return callback;
});