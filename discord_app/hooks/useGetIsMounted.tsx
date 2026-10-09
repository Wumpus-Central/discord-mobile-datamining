// === Module 8359: useGetIsMounted ===

// Module 8359 (useGetIsMounted)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetIsMounted() {
  const cResult = c.c(3);
  noop.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return () => {
        ref.current = false;
      };
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      return ref.current;
    };
    cResult[2] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useGetIsMounted() {
  noop.useRef(true);
  const effect = noop.useEffect(() => () => {
    ref.current = false;
  }, []);
  return noop.useCallback(() => ref.current, []);
});