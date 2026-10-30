// === Module 19320: useIsInRestrictedHours ===

// Module 19320 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1384 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};