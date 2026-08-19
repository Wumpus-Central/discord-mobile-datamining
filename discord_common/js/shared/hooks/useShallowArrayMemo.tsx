// === Module 15388: useShallowArrayMemo ===

// Module 15388 (useShallowArrayMemo)
import obj132 from "obj132" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15389 */;

const result = obj132.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(643).areArraysShallowEqual);
};