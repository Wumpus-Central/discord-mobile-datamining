// discord_app/modules/parent_tools/hooks/useIsInRestrictedHours.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import RestrictedHoursManager from "../RestrictedHoursManager.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
}
