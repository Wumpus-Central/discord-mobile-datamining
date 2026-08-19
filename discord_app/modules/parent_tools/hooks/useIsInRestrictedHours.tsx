// discord_app/modules/parent_tools/hooks/useIsInRestrictedHours.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import scheduleUpcomingWarning from "../RestrictedHoursManager.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import freshTeenActivityWithMap from "../FamilyCenterStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};