// === Module 17297: useIsInRestrictedHours ===

// Module 17297 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17298 */;
import UserStore from "UserStore" /* 1371 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};