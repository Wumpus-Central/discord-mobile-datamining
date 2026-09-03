// === Module 8232: usePremiumPlanPrice ===

// Module 8232 (usePremiumPlanPrice)
import closure_3 from "noop" /* 19 */;
import closure_4 from "addSubscriptionPlan" /* 4144 */;
import closure_5 from "reset" /* 4145 */;
import closure_6 from "updateProduct" /* 6093 */;
import { PaymentGateways } from "sum" /* 502 */;

const require = arg1;
let obj = { IAP: "IAP", API: "API" };
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  const _require = arg0;
  let formatPrice = _require;
  let amount = priceState;
  obj = _require(priceState[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = _require(priceState[6]).NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  storeFront = storeFront(priceState[7]).useNativeIAPPayments().storeFront;
  const obj2 = storeFront(priceState[7]);
  const tmp2 = storeFront;
  const items1 = [closure_4];
  const items2 = [arg0];
  const stateFromStores1 = _require(priceState[5]).useStateFromStores(items1, () => {
    let value = null;
    if (null != closure_0) {
      value = isIOSResult.get(tmp);
    }
    return value;
  }, items2);
  const obj3 = _require(priceState[5]);
  ({ price, priceState } = storeFront(priceState[8])(stateFromStores1, storeFront));
  let tmp5 = null;
  let tmp6 = null;
  if (null != arg0) {
    tmp6 = formatPrice(amount[9]).BasePlanIdToProductId[arg0];
  }
  const React = tmp6;
  const tmp4 = storeFront(priceState[8])(stateFromStores1, storeFront);
  const items3 = [closure_6];
  const items4 = [tmp6];
  const stateFromStores2 = formatPrice(amount[5]).useStateFromStores(items3, () => {
    let product = null;
    if (null != closure_3) {
      product = closure_1_6.getProduct(tmp);
    }
    return product;
  }, items4);
  const formatPriceResult = formatPrice(amount[5]);
  let isIOSResult = formatPrice(amount[10]).isIOS();
  if (isIOSResult) {
    if (!enabled) {
      let isACOM;
      if (stateFromStores != tmp5) {
        isACOM = stateFromStores.isACOM;
      }
      enabled = true === isACOM;
    }
    isIOSResult = enabled;
  }
  closure_4 = isIOSResult;
  const tmp10 = tmp2(amount[11])(() => new storeFront(priceState[12])(500, 10000));
  closure_5 = tmp10;
  const items5 = [isIOSResult, priceState, storeFront, tmp10];
  const effect = React.useEffect(() => {
    if (closure_4) {
      if (priceState !== callback(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (tmp === tmp2(tmp3[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (storeFront != null) {
            country = tmp6.country;
          }
          if (null != country) {
            if (!closure_5.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (obj.fails < 3) {
                  country = tmp6.country;
                  obj.fail(() => {
                    if (!isIOSResult.isFetchingForPremiumSKUs()) {
                      obj = country(priceState[13]);
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, closure_2_7.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    closure_5.cancel();
                  };
                }
              }
            }
          }
        }
      } else {
        closure_5.succeed();
      }
    }
  }, items5);
  if (tmp5 == arg0) {
    return null;
  } else if (isIOSResult) {
    let tmp15 = null;
    if (priceState === formatPrice(amount[8]).PriceStates.PRICE_AVAILABLE) {
      tmp15 = null;
      if (tmp5 != price) {
        obj = { price: null, currency: null, countryCode: null, priceString: null, source: null };
        ({ amount: obj7[0], currency: obj7[1] } = price);
        tmp5 = storeFront == tmp5;
        let country;
        if (!tmp5) {
          country = storeFront.country;
        }
        obj[2] = country;
        priceState = formatPrice(amount[14]);
        formatPrice = priceState.formatPrice;
        amount = price.amount;
        price = formatPrice(amount, price.currency);
        obj[3] = price;
        obj[4] = obj.API;
        tmp15 = obj;
      }
    }
    let tmp12 = tmp15;
  } else {
    tmp12 = null;
    if (tmp5 != stateFromStores2) {
      obj = { price: null, currency: null, countryCode: null, priceString: null, source: null };
      ({ price: obj6[0], currencyCode: obj6[1] } = stateFromStores2);
      let country1;
      if (storeFront != tmp5) {
        country1 = storeFront.country;
      }
      if (country1 == tmp5) {
        country1 = stateFromStores2.countryCode;
      }
      obj[2] = country1;
      obj[3] = stateFromStores2.priceString;
      obj[4] = obj.IAP;
      tmp12 = obj;
    }
  }
};
export const PremiumPlanPriceSource = obj;