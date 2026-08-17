// discord_app/modules/premium/premium_state/PremiumStateUtils.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export const parseServerPremiumState = function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = { premiumSubscriptionType: null, premiumSource: null, premiumSubscriptionGroupRole: null };
    ({ premium_subscription_type: obj[0], premium_source: obj[1], premium_subscription_group_role: obj[2] } = premium_state);
    tmp = obj;
  }
  return tmp;
};