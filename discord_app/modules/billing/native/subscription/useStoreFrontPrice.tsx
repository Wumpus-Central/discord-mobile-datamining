// discord_app/modules/billing/native/subscription/useStoreFrontPrice.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { PriceSetAssignmentPurchaseTypes as closure_3 } from "../../../../Constants.tsx";

const require = fn;
let obj = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const result = require("obj132").fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    if (null == callback) {
      let priceState = closure_1_4.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == dependencyMap) {
      priceState = closure_1_4.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = callback.prices;
      let tmp3;
      if (prices != null) {
        tmp3 = prices[closure_1_3.MOBILE];
      }
      if (null == tmp3) {
        priceState = closure_1_4.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        obj = callback(4039);
        const countryPrices = obj.getCountryPrices(callback.id, closure_1_3.MOBILE);
        obj = { purchaseType: null, currency: null };
        obj[0] = closure_1_3.MOBILE;
        obj[1] = dependencyMap.currency;
        const experimentalGetPriceResult = callback(4039).experimentalGetPrice(callback.id, obj);
        if (countryPrices.countryCode !== dependencyMap.country) {
          priceState = closure_1_4.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          priceState = closure_1_4.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          priceState = closure_1_4.PRICE_AVAILABLE;
        }
        const price = experimentalGetPriceResult;
        const obj2 = callback(4039);
      }
    }
    return { price, priceState };
  }, items);
};
export const PriceStates = obj;