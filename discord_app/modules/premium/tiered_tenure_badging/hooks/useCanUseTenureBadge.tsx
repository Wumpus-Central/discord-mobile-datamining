// === Module 13950: useCanUseTenureBadge ===

// Module 13950 (useCanUseTenureBadge)
import initialize from "initialize" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 13887 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx");

export function useCanUseTenureBadge() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumPerkGates.canUseTenureBadge(currentUser.getCurrentUser()));
}