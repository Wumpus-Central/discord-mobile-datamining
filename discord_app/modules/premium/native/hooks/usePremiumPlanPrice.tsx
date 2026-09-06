// === Module 9364: usePremiumPlanPrice ===

// Module 9364 (usePremiumPlanPrice)
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7257 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
const PaymentGateways = fn(1085).PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  _require = arg0;
  let formatPrice = _require;
  let amount = priceState;
  let obj = require("initialize");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  storeFront = storeFront(priceState[7]).useNativeIAPPayments().storeFront;
  const obj2 = storeFront(priceState[7]);
  const tmp2 = storeFront;
  const items1 = [SubscriptionPlanStore];
  const items2 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    value = null;
    if (null != closure_0) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  }, items2);
  const obj3 = require("initialize");
  ({ price, priceState } = storeFront(priceState[8])(stateFromStores1, storeFront));
  let tmp5 = null;
  let tmp6 = null;
  if (null != arg0) {
    tmp6 = formatPrice(amount[9]).BasePlanIdToProductId[arg0];
  }
  noop = tmp6;
  const tmp4 = storeFront(priceState[8])(stateFromStores1, storeFront);
  const items3 = [IAPStore];
  const items4 = [tmp6];
  const stateFromStores2 = formatPrice(amount[5]).useStateFromStores(items3, () => {
    let product = null;
    if (null != closure_3) {
      product = IAPStore.getProduct(tmp);
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
  SubscriptionPlanStore = isIOSResult;
  const tmp10 = tmp2(amount[11])(() => new storeFront(priceState[12])(500, 10000));
  closure_5 = tmp10;
  const items5 = [isIOSResult, priceState, storeFront, tmp10];
  const effect = noop.useEffect(() => {
    if (closure_4) {
      if (priceState !== closure_0(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (priceState === closure_0(priceState[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (storeFront != null) {
            country = storeFront.country;
          }
          if (null != country) {
            if (!closure_5.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (closure_5.fails < 3) {
                  country = storeFront.country;
                  closure_5.fail(() => {
                    if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                      const obj = SubscriptionPlanActionCreators;
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, PaymentGateways.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    closure_1_5.cancel();
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
    if (priceState === formatPrice(amount[8]).PriceStates.PRICE_AVAILABLE) {
      if (tmp5 != price) {
        obj = { price: null, currency: null, countryCode: null, priceString: null, source: null };
        ({ amount: obj7.price, currency: obj7.currency } = price);
        tmp5 = storeFront == tmp5;
        let country;
        if (!tmp5) {
          country = storeFront.country;
        }
        obj.countryCode = country;
        priceState = formatPrice(amount[14]);
        formatPrice = priceState.formatPrice;
        amount = price.amount;
        price = formatPrice(amount, price.currency);
        obj.priceString = price;
        obj.source = obj.API;
      }
    }
  } else if (tmp5 != stateFromStores2) {
    obj = { price: null, currency: null, countryCode: null, priceString: null, source: null };
    ({ price: obj6.price, currencyCode: obj6.currency } = stateFromStores2);
    let country1;
    if (storeFront != tmp5) {
      country1 = storeFront.country;
    }
    if (country1 == tmp5) {
      country1 = stateFromStores2.countryCode;
    }
    obj.countryCode = country1;
    obj.priceString = stateFromStores2.priceString;
    obj.source = obj.IAP;
  }
};
export { PremiumPlanPriceSource };