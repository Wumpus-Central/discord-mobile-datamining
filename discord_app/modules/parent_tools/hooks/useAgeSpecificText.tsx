// discord_app/modules/parent_tools/hooks/useAgeSpecificText.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = (cResult, cResult2) => {
  let tmp = cResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = cResult2;
  }
  return tmp;
};
