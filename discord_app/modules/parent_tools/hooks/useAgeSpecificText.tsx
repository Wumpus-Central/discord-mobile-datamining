// discord_app/modules/parent_tools/hooks/useAgeSpecificText.tsx
import set from "../../../../_runtime/00002_set.js";
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";

const result = set.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};
