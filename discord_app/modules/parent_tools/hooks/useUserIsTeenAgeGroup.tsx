// === Module 14966: useUserIsTeenAgeGroup ===

// Module 14966 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};