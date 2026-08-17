// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15389 */;
import { shallowEqual } from "../../packages/shallow-equal/shallowEqual.tsx";

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _shallowEqual.areArraysShallowEqual);
};