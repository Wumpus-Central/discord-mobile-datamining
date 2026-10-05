// === Module 8874: useStoreFrontPrice ===

// Module 8874 (useStoreFrontPrice)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const constants = Constants.PriceSetAssignmentPurchaseTypes;
const PriceStates = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((prices, currency) => {
  let PRICE_AVAILABLE;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  if (null == prices) {
    PRICE_AVAILABLE = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
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
          tmp6 = cResult[2];
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
      const tmpResult2 = PremiumUtils;
      const experimentalGetPriceResult = tmpResult2.experimentalGetPrice(prices.id, obj2);
      cResult[0] = currency.currency;
      cResult[1] = prices.id;
      cResult[2] = experimentalGetPriceResult;
      tmp6 = experimentalGetPriceResult;
    }
  }
  if (cResult[3] === tmp6) {
    let tmp14;
    if (cResult[4] === PRICE_AVAILABLE) {
      tmp14 = cResult[5];
    }
    return tmp14;
  }
  const obj3 = { price: tmp6, priceState: PRICE_AVAILABLE };
  cResult[3] = tmp6;
  cResult[4] = PRICE_AVAILABLE;
  cResult[5] = obj3;
  tmp14 = obj3;
}) : ((arg0, arg1) => {
  const user = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let obj;
    let price;
    let priceState;
    if (null == user) {
      priceState = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
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
        const obj2 = PremiumUtils;
        const experimentalGetPriceResult = obj2.experimentalGetPrice(user.id, obj3);
        if (countryPrices.countryCode !== closure_1.country) {
          priceState = obj.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          priceState = obj.PRICE_AVAILABLE;
        }
        price = experimentalGetPriceResult;
      }
    }
    return { price, priceState };
  }, items);
});
const result = size.fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default tmp2;
export { PriceStates };