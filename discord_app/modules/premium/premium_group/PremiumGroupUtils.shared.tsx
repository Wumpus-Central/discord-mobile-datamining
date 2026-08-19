// === Module 8269: getPriceString ===

// Module 8269 (getPriceString)
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 5316 */;
import addSubscriptionPlan from "addSubscriptionPlan" /* 4044 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup) {
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = closure_2.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = getPremiumPlanItem.getPrice(planIdFromItems);
          const formatPriceResult = formatSingleCurrencyPrice.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return formatSingleCurrencyPrice.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
};