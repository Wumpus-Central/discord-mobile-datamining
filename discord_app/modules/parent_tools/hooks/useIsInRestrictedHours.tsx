// === Module 17131: useIsInRestrictedHours ===

// Module 17131 (useIsInRestrictedHours)
import initialize from "initialize" /* 586 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 17132 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "freshTeenActivityWithMap" /* 7292 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};