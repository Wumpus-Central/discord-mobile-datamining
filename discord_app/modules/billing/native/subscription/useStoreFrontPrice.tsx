// === Module 9369: useStoreFrontPrice ===

// Module 9369 (useStoreFrontPrice)
import PremiumUtils from "PremiumUtils" /* 4218 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(1074).PriceSetAssignmentPurchaseTypes;
const PriceStates = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    if (null == closure_0) {
      let priceState = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == closure_1) {
      priceState = obj.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = tmp.prices;
      let tmp3;
      if (prices != null) {
        tmp3 = prices[constants.MOBILE];
      }
      if (null == tmp3) {
        priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        obj = PremiumUtils;
        const countryPrices = obj.getCountryPrices(tmp.id, constants.MOBILE);
        obj = { purchaseType: constants.MOBILE, currency: tmp11.currency };
        const experimentalGetPriceResult = PremiumUtils.experimentalGetPrice(tmp.id, obj);
        if (countryPrices.countryCode !== tmp11.country) {
          priceState = obj.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          priceState = obj.PRICE_AVAILABLE;
        }
        const price = experimentalGetPriceResult;
      }
    }
    return { price, priceState };
  }, items);
};
export { PriceStates };