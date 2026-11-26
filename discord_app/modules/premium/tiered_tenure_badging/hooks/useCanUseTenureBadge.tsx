// === Module 9820: useCanUseTenureBadge ===

// Module 9820 (useCanUseTenureBadge)
import initialize from "initialize" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 9821 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx");

export function useCanUseTenureBadge() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumPerkGates.canUseTenureBadge(currentUser.getCurrentUser()));
}