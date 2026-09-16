// === Module 8167: ? ===

// Module 8167
import PremiumUtils from "PremiumUtils" /* 4295 */;
import PriceUtils from "PriceUtils" /* 7344 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4300 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup, arg1) {
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        value = SubscriptionPlanStore.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = PremiumUtils.getPrice(planIdFromItems);
          const formatPriceResult = PriceUtils.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return PriceUtils.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
};