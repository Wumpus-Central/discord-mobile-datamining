// === Module 14870: useUserAgeGroup ===

// Module 14870 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};