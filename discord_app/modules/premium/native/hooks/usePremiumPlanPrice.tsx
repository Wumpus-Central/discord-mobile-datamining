// discord_app/modules/premium/native/hooks/usePremiumPlanPrice.tsx
import SubscriptionPlanActionCreators from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

const require = globalThis.__r;

require = fn;
const constants = fn(1072).PriceSetAssignmentPurchaseTypes;
const PaymentGateways = fn(1083).PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(planIdForPremiumType, arg1) {
  _require = planIdForPremiumType;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isGift;
  if (flag === undefined) {
    flag = false;
  }
  let mobileStoreFront;
  priceState = undefined;
  c4 = undefined;
  closure_5 = undefined;
  let formatPrice = _require;
  let amount = priceState;
  const NitroGiftACOMExperiment = require("ACOMExperiments").NitroGiftACOMExperiment;
  mobileStoreFront = mobileStoreFront(priceState[6]).useMobileStoreFront();
  const obj2 = mobileStoreFront(priceState[6]);
  const tmp = mobileStoreFront;
  items = [c4];
  const items1 = [planIdForPremiumType];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      value = null;
      if (null != closure_0) {
        value = SubscriptionPlanStore.get(tmp);
      }
      return value;
    },
    items1,
  );
  const obj3 = require("initialize");
  ({ price, priceState } = mobileStoreFront(priceState[8])(
    stateFromStores,
    mobileStoreFront,
    flag ? constants.GIFT : constants.MOBILE,
  ));
  let tmp6 = null;
  let productIdForGift = null;
  if (null == planIdForPremiumType) {
    const items2 = [closure_5];
    const items3 = [null];
    const stateFromStores1 = formatPrice(amount[7]).useStateFromStores(
      items2,
      () => {
        let product = null;
        if (null != productIdForGift) {
          product = IAPStore.getProduct(tmp);
        }
        return product;
      },
      items3,
    );
    const formatPriceResult = formatPrice(amount[7]);
    let isIOSResult = formatPrice(amount[10]).isIOS();
    if (isIOSResult) {
      let enabled = !flag;
      if (flag) {
        enabled = NitroGiftACOMExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
      }
      isIOSResult = enabled;
    }
    c4 = isIOSResult;
    const tmp12 = tmp(amount[11])(() => new mobileStoreFront(priceState[12])(500, 10000));
    closure_5 = tmp12;
    const items4 = [isIOSResult, priceState, mobileStoreFront, tmp12];
    const effect = productIdForGift.useEffect(() => {
      if (_undefined) {
        if (priceState !== planIdForPremiumType(priceState[8]).PriceStates.PRICE_AVAILABLE) {
          if (priceState === planIdForPremiumType(priceState[8]).PriceStates.MISMATCHING_COUNTRIES) {
            let country;
            if (mobileStoreFront != null) {
              country = mobileStoreFront.country;
            }
            if (null != country) {
              if (!closure_5.pending) {
                if (!_undefined.isFetchingForPremiumSKUs()) {
                  if (closure_5.fails < 3) {
                    country = mobileStoreFront.country;
                    closure_5.fail(() => {
                      if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                        const obj = SubscriptionPlanActionCreators;
                        const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(
                          country,
                          undefined,
                          undefined,
                          PaymentGateways.APPLE_ADVANCED_COMMERCE,
                        );
                        premiumSubscriptionPlans.catch(() => {});
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
    }, items4);
    if (tmp6 == planIdForPremiumType) {
      return null;
    } else if (isIOSResult) {
      if (priceState === formatPrice(amount[8]).PriceStates.PRICE_AVAILABLE) {
        if (tmp6 != price) {
          const obj4 = { price: null, currency: null, countryCode: null, priceString: null, source: null };
          ({ amount: obj8.price, currency: obj8.currency } = price);
          tmp6 = mobileStoreFront == tmp6;
          let country;
          if (!tmp6) {
            country = mobileStoreFront.country;
          }
          obj4.countryCode = country;
          priceState = formatPrice(amount[14]);
          formatPrice = priceState.formatPrice;
          amount = price.amount;
          price = formatPrice(amount, price.currency);
          obj4.priceString = price;
          obj4.source = obj.API;
        }
      }
    } else if (tmp6 != stateFromStores1) {
      const obj5 = { price: null, currency: null, countryCode: null, priceString: null, source: null };
      ({ price: obj7.price, currencyCode: obj7.currency } = stateFromStores1);
      let country1;
      if (mobileStoreFront != tmp6) {
        country1 = mobileStoreFront.country;
      }
      if (country1 == tmp6) {
        country1 = stateFromStores1.countryCode;
      }
      obj5.countryCode = country1;
      obj5.priceString = stateFromStores1.priceString;
      obj5.source = obj.IAP;
    }
    const formatPriceResult1 = formatPrice(amount[10]);
  } else {
    const formatPriceResult2 = formatPrice(amount[9]);
    if (flag) {
      productIdForGift = formatPriceResult2.getProductIdForGift(planIdForPremiumType);
    } else {
      productIdForGift = formatPriceResult2.BasePlanIdToProductId[planIdForPremiumType];
    }
  }
  const tmp5 = mobileStoreFront(priceState[8])(
    stateFromStores,
    mobileStoreFront,
    flag ? constants.GIFT : constants.MOBILE,
  );
}
export { PremiumPlanPriceSource };
