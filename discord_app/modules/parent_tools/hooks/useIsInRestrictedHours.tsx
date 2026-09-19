// === Module 17704: useIsInRestrictedHours ===

// Module 17704 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17705 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};