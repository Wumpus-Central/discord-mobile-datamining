// === Module 17081: useUserAgeGroup ===

// Module 17081 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7791 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  items = [FamilyCenterStore];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};