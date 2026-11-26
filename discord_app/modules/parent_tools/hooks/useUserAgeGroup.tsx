// === Module 16377: useUserAgeGroup ===

// Module 16377 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  items = [FamilyCenterStore];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};