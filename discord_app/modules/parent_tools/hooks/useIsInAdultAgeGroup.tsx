// === Module 7248: useIsInAdultAgeGroup ===

// Module 7248 (useIsInAdultAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "adult" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};