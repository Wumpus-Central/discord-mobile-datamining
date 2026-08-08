// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import { shallowEqual } from "../../packages/shallow-equal/shallowEqual.tsx";
import { useMemoWithEqualityFunction } from "useMemoWithEqualityFunction.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunction(() => closure_0, arg0, _shallowEqual.areArraysShallowEqual);
};