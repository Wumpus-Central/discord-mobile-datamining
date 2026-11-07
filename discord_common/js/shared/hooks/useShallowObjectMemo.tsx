// === Module 9544: useShallowObjectMemo ===

// Module 9544 (useShallowObjectMemo)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 9545 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowObjectMemo.tsx");

export default function useShallowObjectMemo(current) {
  closure_0 = current;
  return useMemoWithEqualityFunctionDefault(() => closure_0, current, discord_common_shallowEqualDefault);
};