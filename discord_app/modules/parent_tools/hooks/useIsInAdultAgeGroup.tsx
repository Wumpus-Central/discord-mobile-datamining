// === Module 8302: useIsInAdultAgeGroup ===

// Module 8302 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7153 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};