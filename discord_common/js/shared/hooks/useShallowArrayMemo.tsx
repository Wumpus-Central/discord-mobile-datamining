// === Module 15946: useShallowArrayMemo ===

// Module 15946 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15947 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(640).areArraysShallowEqual);
};