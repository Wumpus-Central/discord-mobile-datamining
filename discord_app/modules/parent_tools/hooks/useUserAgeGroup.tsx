// discord_app/modules/parent_tools/hooks/useUserAgeGroup.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};