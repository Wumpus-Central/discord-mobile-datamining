// === Module 1406: PremiumStateUtils ===

// Module 1406 (PremiumStateUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = { premiumSubscriptionType: null, premiumSource: null, premiumSubscriptionGroupRole: null };
    ({ premium_subscription_type: obj.premiumSubscriptionType, premium_source: obj.premiumSource, premium_subscription_group_role: obj.premiumSubscriptionGroupRole } = premium_state);
    tmp = obj;
  }
  return tmp;
}