// discord_app/modules/parent_tools/hooks/useUserAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [FamilyCenterStore];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
}
