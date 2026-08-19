// discord_app/modules/premium/native/hooks/usePremiumPlanPrice.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import addSubscriptionPlan from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import updateProduct from "../../../../stores/native/IAPStore.android.tsx";
import { PaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  const _require = arg0;
  let formatPrice = _require;
  let amount = priceState;
  let obj = _require(priceState[5]);
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
        if (priceState === callback(priceState[8]).PriceStates.MISMATCHING_COUNTRIES) {
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
                    if (!isIOSResult.isFetchingForPremiumSKUs()) {
                      const obj = country(priceState[13]);
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, PaymentGateways.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch((error) => {

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
    if (priceState === formatPrice(amount[8]).PriceStates.PRICE_AVAILABLE) {
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
      }
    }
  } else if (tmp5 != stateFromStores2) {
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
  }
};