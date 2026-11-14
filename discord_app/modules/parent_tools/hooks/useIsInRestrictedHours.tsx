// === Module 20157: useIsInRestrictedHours ===

// Module 20157 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1388 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};