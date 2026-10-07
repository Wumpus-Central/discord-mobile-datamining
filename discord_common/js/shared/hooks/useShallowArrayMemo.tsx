// discord_common/js/shared/hooks/useShallowArrayMemo.tsx
import discord_common_shallowEqual from "../../packages/shallow-equal/shallowEqual.tsx";
import c from "../../../../_runtime/00576_c.js";
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction.tsx";
import ReactCompilerGating from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      closure_0 = current;
      const cResult = c.c(2);
      if (cResult[0] !== current) {
        const fn = function l() {
          return closure_0;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      return useMemoWithEqualityFunctionDefault(tmp4, current, discord_common_shallowEqual.areArraysShallowEqual);
    }
  : (current) => {
      closure_0 = current;
      return useMemoWithEqualityFunctionDefault(
        () => closure_0,
        current,
        discord_common_shallowEqual.areArraysShallowEqual,
      );
    };
