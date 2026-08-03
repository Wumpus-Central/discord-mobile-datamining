import noop from "noop";
import { PriceSetAssignmentPurchaseTypes as closure_3 } from "ME";

const require = arg1;
let obj = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    if (null == callback) {
      let priceState = outer1_4.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == dependencyMap) {
      priceState = outer1_4.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = tmp.prices;
      let tmp3;
      if (prices != null) {
        tmp3 = prices[outer1_3.MOBILE];
      }
      if (null == tmp3) {
        priceState = outer1_4.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        let obj = callback(3839);
        const countryPrices = obj.getCountryPrices(tmp.id, outer1_3.MOBILE);
        obj = { purchaseType: null, currency: null };
        obj[0] = outer1_3.MOBILE;
        obj[1] = tmp11.currency;
        const experimentalGetPriceResult = callback(3839).experimentalGetPrice(tmp.id, obj);
        if (countryPrices.countryCode !== tmp11.country) {
          priceState = outer1_4.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          priceState = outer1_4.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          priceState = outer1_4.PRICE_AVAILABLE;
        }
        const price = experimentalGetPriceResult;
        const obj2 = callback(3839);
      }
    }
    return { price, priceState };
  }, items);
};
export const PriceStates = obj;