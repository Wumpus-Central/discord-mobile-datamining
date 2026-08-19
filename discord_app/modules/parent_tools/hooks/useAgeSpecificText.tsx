// discord_app/modules/parent_tools/hooks/useAgeSpecificText.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";

const result = obj132.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};