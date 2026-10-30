// discord_app/modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
}
