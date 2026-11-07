// === Module 14319: canBoostGuildFromMobile ===

// Module 14319 (canBoostGuildFromMobile)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/canBoostGuildFromMobile.tsx");

export default function canBoostGuildFromMobile(hasFetchedSubscriptions) {
  ({ isPurchaseBlocked, hasFetchedBoostSlots, boostsNeeded } = hasFetchedSubscriptions);
  let prop = hasFetchedSubscriptions.hasFetchedSubscriptions;
  if (prop) {
    if (isPurchaseBlocked) {
      isPurchaseBlocked = !hasFetchedSubscriptions.isWebRedirectCheckoutEnabled;
    }
    let tmp3 = !isPurchaseBlocked;
    if (isPurchaseBlocked) {
      if (hasFetchedBoostSlots) {
        hasFetchedBoostSlots = boostsNeeded > 0;
      }
      if (hasFetchedBoostSlots) {
        hasFetchedBoostSlots = tmp >= boostsNeeded;
      }
      tmp3 = hasFetchedBoostSlots;
    }
    prop = tmp3;
  }
  return prop;
};