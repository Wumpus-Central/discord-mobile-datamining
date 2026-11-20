// === Module 9017: useIsInAdultAgeGroup ===

// Module 9017 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};