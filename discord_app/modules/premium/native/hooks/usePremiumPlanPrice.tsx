// discord_app/modules/premium/native/hooks/usePremiumPlanPrice.tsx
import SubscriptionPlanActionCreators from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

const require = globalThis.__r;

require = fn;
const PaymentGateways = fn(1096).PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumPlanPrice(arg0) {
  _require = arg0;
  const cResult = require("c").c(34);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, S);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[2] = { location: "usePremiumPlanPrice" };
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    const obj2 = { location: "usePremiumPlanPrice" };
  } else {
    const tmp8 = cResult[2];
  }
  const NitroACOMSubscriptionExperiment = tmp(priceState[8]).NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig(tmp8).enabled;
  const tmpResult = require("initialize");
  mobileStoreFront = mobileStoreFront(priceState[9]).useMobileStoreFront();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionPlanStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn = function p() {
      value = null;
      if (null != closure_0) {
        value = SubscriptionPlanStore.get(tmp);
      }
      return value;
    };
    const items2 = [arg0];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[4] = arg0;
    cResult[5] = fn;
    cResult[6] = items2;
    let tmp14 = items2;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const obj4 = mobileStoreFront(priceState[9]);
  const stateFromStores1 = require("initialize").useStateFromStores(tmp11, tmp13, tmp14);
  const tmpResult4 = require("initialize");
  ({ price, priceState } = mobileStoreFront(priceState[10])(stateFromStores1, mobileStoreFront));
  let tmp17 = null;
  if (null != arg0) {
    tmp17 = tmp(priceState[11]).BasePlanIdToProductId[arg0];
  }
  closure_3 = tmp17;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [IAPStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[7] = items3;
    let tmp18 = items3;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp17) {
    const fn2 = function b() {
      let product = null;
      if (null != closure_3) {
        product = IAPStore.getProduct(tmp);
      }
      return product;
    };
    const items4 = [tmp17];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[8] = tmp17;
    cResult[9] = fn2;
    cResult[10] = items4;
    let tmp21 = items4;
    let tmp20 = fn2;
  } else {
    tmp20 = cResult[9];
    tmp21 = cResult[10];
  }
  const tmp16 = mobileStoreFront(priceState[10])(stateFromStores1, mobileStoreFront);
  const stateFromStores2 = require("initialize").useStateFromStores(tmp18, tmp20, tmp21);
  if (cResult[11] === enabled) {
    if (stateFromStores != null) {
      const isACOM = stateFromStores.isACOM;
    }
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    SubscriptionPlanStore = tmp24;
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          tmp = new closure_1(priceState[13])(500, 10000);
          return tmp;
        }
      }
      cResult[14] = U;
      class S {
        constructor() {
          return closure_5.getPremiumTypeSubscription();
        }
      }
    } else {
      class U {
        constructor() {
          tmp = new closure_1(priceState[13])(500, 10000);
          return tmp;
        }
      }
    }
    const tmp28 = tmp9(priceState[14])(tmp27);
    SubscriptionStore = tmp28;
    if (cResult[15] === priceState) {
      class U {
        constructor() {
          tmp = new closure_1(priceState[13])(500, 10000);
          return tmp;
        }
      }
    }
    class V {
      constructor() {
        if (closure_4) {
          tmp = priceState;
          tmp2 = closure_0;
          tmp3 = priceState;
          if (priceState !== closure_0(priceState[10]).PriceStates.PRICE_AVAILABLE) {
            if (tmp === tmp2(tmp3[10]).PriceStates.MISMATCHING_COUNTRIES) {
              tmp6 = closure_1;
              tmp7 = null;
              country = undefined;
              if (closure_1 != null) {
                country = tmp6.country;
              }
              if (null != country) {
                obj = closure_5;
                if (!closure_5.pending) {
                  tmp9 = closure_4;
                  if (!closure_4.isFetchingForPremiumSKUs()) {
                    num = 3;
                    if (obj.fails < 3) {
                      country = tmp6.country;
                      failResult = obj.fail(() => {
                        if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                          const obj = SubscriptionPlanActionCreators;
                          const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, PaymentGateways.APPLE_ADVANCED_COMMERCE);
                          premiumSubscriptionPlans.catch(/* F154222 */ function() { ... });
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
            tmp4 = closure_5;
            succeedResult = closure_5.succeed();
          }
        }
        return;
      }
    }
    const items5 = [tmp24, priceState, mobileStoreFront, tmp28];
    cResult[15] = priceState;
    cResult[16] = mobileStoreFront;
    cResult[17] = tmp28;
    cResult[18] = tmp24;
    cResult[19] = V;
    cResult[20] = items5;
  }
  const tmpResult5 = require("initialize");
  let isIOSResult = require("PlatformUtils").isIOS();
  if (isIOSResult) {
    class U {
      constructor() {
        tmp = new closure_1(priceState[13])(500, 10000);
        return tmp;
      }
    }
    if (!enabled) {
      class U {
        constructor() {
          tmp = new closure_1(priceState[13])(500, 10000);
          return tmp;
        }
      }
      if (stateFromStores != null) {
        class U {
          constructor() {
            tmp = new closure_1(priceState[13])(500, 10000);
            return tmp;
          }
        }
      }
      class S {
        constructor() {
          return closure_5.getPremiumTypeSubscription();
        }
      }
    }
    isIOSResult = tmp26;
  }
  cResult[11] = enabled;
  if (stateFromStores != null) {
    class U {
      constructor() {
        tmp = new closure_1(priceState[13])(500, 10000);
        return tmp;
      }
    }
  }
  cResult[12] = undefined;
  cResult[13] = isIOSResult;
  const tmpResult6 = require("PlatformUtils");
}) : (function usePremiumPlanPrice(arg0) {
  _require = arg0;
  let formatPrice = _require;
  let amount = priceState;
  let obj = require("initialize");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  mobileStoreFront = mobileStoreFront(priceState[9]).useMobileStoreFront();
  const obj2 = mobileStoreFront(priceState[9]);
  const tmp2 = mobileStoreFront;
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
  ({ price, priceState } = mobileStoreFront(priceState[10])(stateFromStores1, mobileStoreFront));
  let tmp6 = null;
  let tmp7 = null;
  if (null != arg0) {
    tmp7 = formatPrice(amount[11]).BasePlanIdToProductId[arg0];
  }
  noop = tmp7;
  const tmp5 = mobileStoreFront(priceState[10])(stateFromStores1, mobileStoreFront);
  const items3 = [IAPStore];
  const items4 = [tmp7];
  const stateFromStores2 = formatPrice(amount[7]).useStateFromStores(items3, () => {
    let product = null;
    if (null != closure_3) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items4);
  const formatPriceResult = formatPrice(amount[7]);
  let isIOSResult = formatPrice(amount[12]).isIOS();
  if (isIOSResult) {
    if (!enabled) {
      let isACOM;
      if (stateFromStores != tmp6) {
        isACOM = stateFromStores.isACOM;
      }
      enabled = true === isACOM;
    }
    isIOSResult = enabled;
  }
  SubscriptionPlanStore = isIOSResult;
  const tmp11 = tmp2(amount[14])(() => new mobileStoreFront(priceState[13])(500, 10000));
  closure_5 = tmp11;
  const items5 = [isIOSResult, priceState, mobileStoreFront, tmp11];
  const effect = noop.useEffect(() => {
    if (closure_4) {
      if (priceState !== closure_0(priceState[10]).PriceStates.PRICE_AVAILABLE) {
        if (priceState === closure_0(priceState[10]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (mobileStoreFront != null) {
            country = mobileStoreFront.country;
          }
          if (null != country) {
            if (!closure_5.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (closure_5.fails < 3) {
                  country = mobileStoreFront.country;
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
  if (tmp6 == arg0) {
    return null;
  } else if (isIOSResult) {
    if (priceState === formatPrice(amount[10]).PriceStates.PRICE_AVAILABLE) {
      if (tmp6 != price) {
        const obj4 = { price: null, currency: null, countryCode: null, priceString: null, source: null };
        ({ amount: obj7.price, currency: obj7.currency } = price);
        tmp6 = mobileStoreFront == tmp6;
        let country;
        if (!tmp6) {
          country = mobileStoreFront.country;
        }
        obj4.countryCode = country;
        priceState = formatPrice(amount[16]);
        formatPrice = priceState.formatPrice;
        amount = price.amount;
        price = formatPrice(amount, price.currency);
        obj4.priceString = price;
        obj4.source = obj.API;
      }
    }
  } else if (tmp6 != stateFromStores2) {
    const obj5 = { price: null, currency: null, countryCode: null, priceString: null, source: null };
    ({ price: obj6.price, currencyCode: obj6.currency } = stateFromStores2);
    let country1;
    if (mobileStoreFront != tmp6) {
      country1 = mobileStoreFront.country;
    }
    if (country1 == tmp6) {
      country1 = stateFromStores2.countryCode;
    }
    obj5.countryCode = country1;
    obj5.priceString = stateFromStores2.priceString;
    obj5.source = obj.IAP;
  }
});
export { PremiumPlanPriceSource };