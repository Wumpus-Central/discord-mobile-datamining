// === Module 5598: hooks/useMountEffect ===

// Module 5598 (hooks/useMountEffect)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  noop.useRef(arg0);
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
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  noop.useRef(arg0);
  const effect = noop.useEffect(() => ref.current(), []);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  noop.useRef(arg0);
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
  const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
}) : ((arg0) => {
  noop.useRef(arg0);
  const layoutEffect = noop.useLayoutEffect(() => ref.current(), []);
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default tmp2;
export const useMountLayoutEffect = tmp3;
export const useUnmountEffect = ReactCompilerGating.isReactCompilerEnabled() ? ((current) => {
  const cResult = c.c(4);
  closure_1 = noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function u() {
      closure_1.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const effect = noop.useEffect(tmp2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      return () => {
        ref.current();
      };
    };
    const items = [];
    cResult[2] = fn2;
    cResult[3] = items;
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const effect1 = noop.useEffect(tmp4, tmp5);
}) : ((current) => {
  closure_1 = noop.useRef(current);
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const effect1 = noop.useEffect(() => () => {
    ref.current();
  }, []);
});