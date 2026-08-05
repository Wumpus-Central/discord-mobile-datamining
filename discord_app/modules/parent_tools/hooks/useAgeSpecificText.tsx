// discord_app/modules/parent_tools/hooks/useAgeSpecificText.tsx
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (require("useIsInAdultAgeGroup.tsx")()) {
    tmp = intl2;
  }
  return tmp;
};