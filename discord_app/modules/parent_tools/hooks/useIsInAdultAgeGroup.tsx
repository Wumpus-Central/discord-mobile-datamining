// === Module 8716: useIsInAdultAgeGroup ===

// Module 8716 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7589 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};