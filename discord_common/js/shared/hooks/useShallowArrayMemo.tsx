// === Module 15627: useShallowArrayMemo ===

// Module 15627 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15628 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(643).areArraysShallowEqual);
};