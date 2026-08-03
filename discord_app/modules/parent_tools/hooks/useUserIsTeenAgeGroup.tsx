// === Module 14028: useUserIsTeenAgeGroup ===

// Module 14028 (useUserIsTeenAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "teen" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};