// === Module 11531: useAgeSpecificText ===

// Module 11531 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8296 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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