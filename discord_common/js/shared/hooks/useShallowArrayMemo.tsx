// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import discord_common_shallowEqual from "../../packages/shallow-equal/shallowEqual.tsx";
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  closure_0 = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, discord_common_shallowEqual.areArraysShallowEqual);
}
