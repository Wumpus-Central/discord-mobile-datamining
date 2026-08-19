// discord_app/modules/premium/premium_group/PremiumGroupUtils.shared.tsx
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import formatSingleCurrencyPrice from "../../../utils/PriceUtils.tsx";
import addSubscriptionPlan from "../../../stores/billing/SubscriptionPlanStore.tsx";

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