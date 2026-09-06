// discord_app/modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
}
