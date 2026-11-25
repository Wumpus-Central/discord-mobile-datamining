// === Module 8174: useIsInAdultAgeGroup ===

// Module 8174 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};