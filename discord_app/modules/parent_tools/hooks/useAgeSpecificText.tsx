// === Module 11603: useAgeSpecificText ===

// Module 11603 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8302 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};