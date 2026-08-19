// === Module 7622: useIsInAdultAgeGroup ===

// Module 7622 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 589 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};