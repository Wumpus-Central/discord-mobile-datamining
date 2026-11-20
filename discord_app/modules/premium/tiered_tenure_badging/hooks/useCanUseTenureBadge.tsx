// === Module 13901: useCanUseTenureBadge ===

// Module 13901 (useCanUseTenureBadge)
import initialize from "initialize" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 13838 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx");

export function useCanUseTenureBadge() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumPerkGates.canUseTenureBadge(currentUser.getCurrentUser()));
}