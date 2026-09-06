// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import discord_common_shallowEqual from "../../packages/shallow-equal/shallowEqual.tsx";
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(current) {
  closure_0 = current;
  return useMemoWithEqualityFunctionDefault(
    () => closure_0,
    current,
    discord_common_shallowEqual.areArraysShallowEqual,
  );
}
