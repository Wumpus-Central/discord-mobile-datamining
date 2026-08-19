// === Module 14268: useUserIsTeenAgeGroup ===

// Module 14268 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 589 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};