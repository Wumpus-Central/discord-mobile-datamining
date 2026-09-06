// discord_app/modules/premium/premium_state/PremiumStateUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export const parseServerPremiumState = function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = { premiumSubscriptionType: null, premiumSource: null, premiumSubscriptionGroupRole: null };
    ({
      premium_subscription_type: obj.premiumSubscriptionType,
      premium_source: obj.premiumSource,
      premium_subscription_group_role: obj.premiumSubscriptionGroupRole,
    } = premium_state);
    tmp = obj;
  }
  return tmp;
};
