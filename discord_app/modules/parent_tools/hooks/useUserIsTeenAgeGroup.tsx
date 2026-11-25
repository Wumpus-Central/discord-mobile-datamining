// === Module 16368: useUserIsTeenAgeGroup ===

// Module 16368 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};