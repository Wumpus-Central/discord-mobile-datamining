// === Module 17297: useIsInRestrictedHours ===

// Module 17297 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 17298 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;
import closure_3 from "freshTeenActivityWithMap" /* 7537 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};