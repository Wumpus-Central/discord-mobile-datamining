// === Module 16467: useShallowArrayMemo ===

// Module 16467 (useShallowArrayMemo)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import c from "c" /* 576 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16468 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShallowArrayMemo(current) {
  closure_0 = current;
  const cResult = c.c(2);
  if (cResult[0] !== current) {
    const fn = function l() {
      return closure_0;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return useMemoWithEqualityFunctionDefault(tmp4, current, discord_common_shallowEqual.areArraysShallowEqual);
}) : (function useShallowArrayMemo(current) {
  closure_0 = current;
  return useMemoWithEqualityFunctionDefault(() => closure_0, current, discord_common_shallowEqual.areArraysShallowEqual);
});