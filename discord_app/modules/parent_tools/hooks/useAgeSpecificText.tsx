// === Module 11107: useAgeSpecificText ===

// Module 11107 (useAgeSpecificText)
import obj132 from "obj132" /* 2 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7622 */;

const result = obj132.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};