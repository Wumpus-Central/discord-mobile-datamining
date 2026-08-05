// discord_app/modules/parent_tools/hooks/useUserAgeGroup.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};