// === Module 6638: hooks/useStableCallback ===

// Module 6638 (hooks/useStableCallback)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStableCallback(current) {
  const cResult = c.c(3);
  noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function c() {
      closure_1.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const insertionEffect = noop.useInsertionEffect(tmp2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      const items = [...HermesBuiltin.copyRestArgs()];
      return ref.current.apply(items);
    };
    cResult[2] = fn2;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
  }
  return tmp4;
}) : (function useStableCallback(current) {
  noop.useRef(current);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_1.current = current;
  });
  return noop.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
});