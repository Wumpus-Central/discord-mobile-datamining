// === Module 7971: getPriceString ===

// Module 7971 (getPriceString)
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 6090 */;
import closure_2 from "addSubscriptionPlan" /* 4144 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

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
          const obj2 = getPremiumPlanItem;
          const tmp2 = require;
          const formatPriceResult = formatSingleCurrencyPrice.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(6090).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = formatSingleCurrencyPrice;
        }
      }
    }
  }
  return null;
};