// discord_app/modules/parent_tools/hooks/useUserAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../FamilyCenterStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
}
