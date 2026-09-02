// === Module 8788: useIsInAdultAgeGroup ===

// Module 8788 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7291 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};