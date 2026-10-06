// === Module 6767: useUnmountAbortSignal ===

// Module 6767 (useUnmountAbortSignal)
import react from "react" /* 576 */;
import useMountEffect from "useMountEffect" /* 5597 */;
import useInitialValueDefault from "useInitialValue" /* 5991 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const abortController = new AbortController();
      return abortController;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useInitialValueDefault(first);
  let closure_0 = tmp5;
  if (cResult[1] !== tmp5) {
    const fn2 = function o() {
      closure_0.abort();
    };
    cResult[1] = tmp5;
    cResult[2] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = useMountEffect;
  const unmountEffect = tmpResult.useUnmountEffect(tmp6);
  return tmp5.signal;
}) : (() => {
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  let closure_0 = tmp;
  const obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    closure_0.abort();
  });
  return tmp.signal;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const abortController = new AbortController();
      return abortController;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useInitialValueDefault(first);
  let closure_1 = tmp5;
  if (cResult[1] === tmp5) {
    let tmp6;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
    }
    const tmpResult = useMountEffect;
    const unmountEffect = tmpResult.useUnmountEffect(tmp6);
    return tmp5.signal;
  }
  const fn2 = function l() {
    const timerId = setTimeout(() => {
      closure_1_1.abort();
    }, closure_0);
  };
  cResult[1] = tmp5;
  cResult[2] = arg0;
  cResult[3] = fn2;
  tmp6 = fn2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  let closure_1 = tmp;
  const obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1.abort();
    }, closure_0);
  });
  return tmp.signal;
});
const result = size.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default tmp2;
export const useUnmountAbortSignalWithDelay = tmp3;