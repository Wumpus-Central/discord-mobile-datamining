// === Module 4190: PremiumRoleUtils ===

// Module 4190 (PremiumRoleUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/PremiumRoleUtils.tsx");

export const isSubscriptionRole = function isSubscriptionRole(role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.subscription_listing_id;
    }
  }
  return null != prop;
};
export const isSubscriptionRoleAvailableForPurchase = function isSubscriptionRoleAvailableForPurchase(role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.available_for_purchase;
    }
  }
  return undefined !== prop;
};