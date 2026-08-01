// === Module 6574: usePremiumPlanPrice ===

// Module 6574 (usePremiumPlanPrice)
import noop from "noop";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import updateProduct from "updateProduct";
import { PaymentGateways } from "sum";

const require = arg1;
const result = require("reset").fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  let price;
  let priceState;
  const _require = arg0;
  let formatPrice = _require;
  let amount = priceState;
  let obj = _require(priceState[5]);
  const items = [reset];
  const stateFromStores = obj.useStateFromStores(items, () => tmp10.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = _require(priceState[6]).NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  storeFront = storeFront(priceState[7]).useNativeIAPPayments().storeFront;
  const obj2 = storeFront(priceState[7]);
  const tmp2 = storeFront;
  const items1 = [addSubscriptionPlan];
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
  const items3 = [updateProduct];
  const items4 = [tmp6];
  const stateFromStores2 = formatPrice(amount[5]).useStateFromStores(items3, () => {
    let product = null;
    if (null != noop) {
      product = outer1_6.getProduct(tmp);
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
  addSubscriptionPlan = isIOSResult;
  const tmp10 = tmp2(amount[11])(() => new storeFront(priceState[12])(500, 10000));
  reset = tmp10;
  const items5 = [isIOSResult, priceState, storeFront, tmp10];
  const effect = React.useEffect(() => {
    if (addSubscriptionPlan) {
      if (priceState !== callback(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (tmp === tmp2(tmp3[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (storeFront != null) {
            country = tmp6.country;
          }
          if (null != country) {
            if (!tmp10.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (obj.fails < 3) {
                  country = tmp6.country;
                  obj.fail(() => {
                    if (!isIOSResult.isFetchingForPremiumSKUs()) {
                      const obj = country(priceState[13]);
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, outer2_7.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    reset.cancel();
                  };
                }
              }
            }
          }
        }
      } else {
        tmp10.succeed();
      }
    }
  }, items5);
  if (tmp5 == arg0) {
    return null;
  } else if (isIOSResult) {
    let tmp14 = null;
    if (priceState === formatPrice(amount[8]).PriceStates.PRICE_AVAILABLE) {
      tmp14 = null;
      if (tmp5 != price) {
        obj = { price: null, currency: null, countryCode: null, priceString: null, source: "API" };
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
        tmp14 = obj;
      }
    }
    let tmp12 = tmp14;
  } else {
    tmp12 = null;
    if (tmp5 != stateFromStores2) {
      obj = { price: null, currency: null, countryCode: null, priceString: null, source: "IAP" };
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
      tmp12 = obj;
    }
  }
};