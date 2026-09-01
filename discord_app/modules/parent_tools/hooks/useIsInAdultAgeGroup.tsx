// discord_app/modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../FamilyCenterStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
}
