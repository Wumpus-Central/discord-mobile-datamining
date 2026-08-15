// discord_app/modules/premium/premium_group/PremiumGroupUtils.shared.tsx
import addSubscriptionPlan from "addSubscriptionPlan";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";
import { formatSingleCurrencyPrice } from "../../../utils/PriceUtils.tsx";

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
          const price = getPremiumPlanItem.getPrice(planIdFromItems);
          const obj2 = getPremiumPlanItem;
          const tmp2 = require;
          const formatPriceResult = formatSingleCurrencyPrice.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(5316).formatRate(formatPriceResult, interval, intervalCount);
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