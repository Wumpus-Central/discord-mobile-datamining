// === Module 8510: ? ===

// Module 8510
import PremiumUtils from "PremiumUtils" /* 2048 */;
import PriceUtils from "PriceUtils" /* 7407 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2052 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export function getPriceString(hasAnyPremiumGroup, arg1) {
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
}