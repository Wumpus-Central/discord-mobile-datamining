// discord_app/modules/billing/native/subscription/useStoreFrontPrice.tsx
import c from "../../../../../_runtime/00576_c.js";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = fn(1085).PriceSetAssignmentPurchaseTypes;
const PriceStates = {
  PRICE_AVAILABLE: "PRICE_AVAILABLE",
  SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE",
  STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE",
  MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES",
  COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useStoreFrontPrice(prices, currency) {
      const obj = c;
      const cResult = obj.c(6);
      if (null == prices) {
        let PRICE_AVAILABLE = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
      } else if (null == currency) {
        PRICE_AVAILABLE = obj.STOREFRONT_UNAVAILABLE;
      } else {
        prices = prices.prices;
        let tmp5;
        if (prices != null) {
          tmp5 = prices[constants.MOBILE];
        }
        if (null == tmp5) {
          PRICE_AVAILABLE = obj.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          PremiumUtils;
          if (cResult[0] === currency.currency) {
            if (cResult[1] === prices.id) {
              let tmp6 = cResult[2];
            }
            if (tmp18.countryCode !== currency.country) {
              PRICE_AVAILABLE = obj.MISMATCHING_COUNTRIES;
            } else if (null == tmp6) {
              PRICE_AVAILABLE = obj.COUNTRY_PRICE_UNAVAILABLE;
            } else {
              PRICE_AVAILABLE = obj.PRICE_AVAILABLE;
            }
          }
          const obj2 = { purchaseType: constants.MOBILE, currency: currency.currency };
          const experimentalGetPriceResult = PremiumUtils.experimentalGetPrice(prices.id, obj2);
          cResult[0] = currency.currency;
          cResult[1] = prices.id;
          cResult[2] = experimentalGetPriceResult;
          tmp6 = experimentalGetPriceResult;
          const tmpResult2 = PremiumUtils;
        }
      }
      if (cResult[3] === tmp6) {
        if (cResult[4] === PRICE_AVAILABLE) {
          let tmp14 = cResult[5];
        }
        return tmp14;
      }
      const obj3 = { price: tmp6, priceState: PRICE_AVAILABLE };
      cResult[3] = tmp6;
      cResult[4] = PRICE_AVAILABLE;
      cResult[5] = obj3;
      tmp14 = obj3;
    }
  : function useStoreFrontPrice(arg0, arg1) {
      const user = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        if (null == user) {
          let priceState = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
        } else if (null == closure_1) {
          priceState = obj.STOREFRONT_UNAVAILABLE;
        } else {
          const prices = user.prices;
          let tmp3;
          if (prices != null) {
            tmp3 = prices[constants.MOBILE];
          }
          if (null == tmp3) {
            priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
          } else {
            obj = PremiumUtils;
            const countryPrices = obj.getCountryPrices(user.id, constants.MOBILE);
            const obj3 = { purchaseType: constants.MOBILE, currency: closure_1.currency };
            const experimentalGetPriceResult = PremiumUtils.experimentalGetPrice(user.id, obj3);
            if (countryPrices.countryCode !== closure_1.country) {
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
