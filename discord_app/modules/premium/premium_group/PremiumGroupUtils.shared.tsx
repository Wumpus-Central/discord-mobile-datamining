// discord_app/modules/premium/premium_group/PremiumGroupUtils.shared.tsx
import addSubscriptionPlan from "addSubscriptionPlan";

const require = arg1;
const result = require("formatSingleCurrencyPrice").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup) {
  let interval;
  let intervalCount;
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = addSubscriptionPlan.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */.getPrice(planIdFromItems);
          const obj2 = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */;
          const tmp2 = require;
          const formatPriceResult = require("../../../utils/PriceUtils.tsx") /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(5764).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require("../../../utils/PriceUtils.tsx") /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};