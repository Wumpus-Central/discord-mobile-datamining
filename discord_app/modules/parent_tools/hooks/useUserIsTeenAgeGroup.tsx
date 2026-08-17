// discord_app/modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 5296 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};