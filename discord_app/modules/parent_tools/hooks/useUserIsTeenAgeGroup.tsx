// discord_app/modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "teen" === initialize /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};