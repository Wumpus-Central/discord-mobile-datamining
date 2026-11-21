// === Module 17646: useShallowArrayMemo ===

// Module 17646 (useShallowArrayMemo)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 8938 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(current) {
  closure_0 = current;
  return useMemoWithEqualityFunctionDefault(() => closure_0, current, discord_common_shallowEqual.areArraysShallowEqual);
};