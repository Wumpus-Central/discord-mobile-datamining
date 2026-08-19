// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction.tsx";

const result = obj132.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, require("../../packages/shallow-equal/shallowEqual.tsx").areArraysShallowEqual);
};