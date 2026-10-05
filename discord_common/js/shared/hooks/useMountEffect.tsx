// === Module 5591: hooks/useMountEffect ===

// Module 5591 (hooks/useMountEffect)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  let closure_0 = react.useRef(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return ref.current();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = react.useRef(arg0);
  const effect = react.useEffect(() => ref.current(), []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  let closure_0 = react.useRef(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return ref.current();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = react.useRef(arg0);
  const layoutEffect = react.useLayoutEffect(() => ref.current(), []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let tmp4;
  let tmp5;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(4);
  let closure_1 = react.useRef(arg0);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      closure_1.current = current;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const effect = react.useEffect(tmp2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      let ref;
      return () => {
        ref.current();
      };
    };
    const items = [];
    cResult[2] = fn2;
    cResult[3] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const effect1 = react.useEffect(tmp4, tmp5);
}) : ((arg0) => {
  let closure_0 = arg0;
  let closure_1 = react.useRef(arg0);
  const effect = react.useEffect(() => {
    closure_1.current = current;
  });
  const effect1 = react.useEffect(() => {
    let ref;
    return () => {
      ref.current();
    };
  }, []);
});
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default tmp2;
export const useMountLayoutEffect = tmp3;
export const useUnmountEffect = tmp4;