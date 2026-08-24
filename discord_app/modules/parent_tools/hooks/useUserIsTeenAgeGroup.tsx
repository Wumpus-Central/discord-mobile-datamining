// discord_app/modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../FamilyCenterStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};