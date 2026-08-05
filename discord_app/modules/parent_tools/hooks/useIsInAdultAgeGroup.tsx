import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "adult" === initialize /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};