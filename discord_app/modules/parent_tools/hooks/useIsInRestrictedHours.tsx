// discord_app/modules/parent_tools/hooks/useIsInRestrictedHours.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import scheduleUpcomingWarning from "../RestrictedHoursManager.tsx";
import closure_2 from "../../../stores/UserStore.tsx";
import closure_3 from "../FamilyCenterStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};