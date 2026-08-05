import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { scheduleUpcomingWarning } from "../RestrictedHoursManager.tsx";
// discord_app/modules/parent_tools/hooks/useIsInRestrictedHours.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return initialize /* initialize */.useStateFromStores(items, scheduleUpcomingWarning /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};