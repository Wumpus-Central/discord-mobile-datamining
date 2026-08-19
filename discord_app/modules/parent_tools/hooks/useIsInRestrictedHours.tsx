// === Module 16510: useIsInRestrictedHours ===

// Module 16510 (useIsInRestrictedHours)
import initialize from "initialize" /* 589 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 16511 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};