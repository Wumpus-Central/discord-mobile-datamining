// === Module 7899: useHasDiscountApplied ===

// Module 7899 (useHasDiscountApplied)
import initialize from "initialize" /* 589 */;
import hooksDefault from "hooks" /* 4043 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7126 */;
import useHasActiveTrial from "useHasActiveTrial" /* 7900 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7901 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 7902 */;
import getPaymentGateway from "getPaymentGateway" /* 7903 */;
import useIsInReverseTrial from "useIsInReverseTrial" /* 7906 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "reset" /* 4113 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = arg1;
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: error, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: c9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_17 } = GuildFeatures);
function useHasDiscountApplied() {
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getPremiumTypeSubscription());
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp4 = null != prop;
  if (tmp4) {
    const _Date = Date;
    const tmp6 = hooksDefault;
    tmp4 = hooksDefault(Date.now()) <= hooksDefault(prop);
    const tmp6Result = hooksDefault(Date.now());
  }
  return tmp4;
}
const result = require("set").fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const obj = usePremiumTrialOffer;
  const tmp = require;
  const hasActiveTrial = useHasActiveTrial.useHasActiveTrial();
  const obj2 = useHasActiveTrial;
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const obj3 = usePremiumDiscountOffer;
  const premiumGroupDiscountOffer = usePremiumDiscountOffer.usePremiumGroupDiscountOffer();
  if (typeof useHasDiscountApplied !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj4 = usePremiumDiscountOffer;
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getPremiumTypeSubscription());
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp9 = null != prop;
  if (tmp9) {
    const _Date = Date;
    const tmp11 = hooksDefault;
    tmp9 = hooksDefault(Date.now()) <= hooksDefault(prop);
    const tmp11Result = hooksDefault(Date.now());
  }
  return null != premiumTrialOffer || hasActiveTrial || null != premiumDiscountOffer || null != premiumGroupDiscountOffer || tmp9;
};
export { useHasDiscountApplied };
export const useActiveDiscountInfo = function useActiveDiscountInfo() {
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let discountId;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      discountId = metadata.active_discount_id;
    }
  }
  if (closure_10 !== discountId) {
    if (closure_12 !== discountId) {
      if (closure_11 !== discountId) {
        if (closure_14 !== discountId) {
          if (closure_15 !== discountId) {
            if (closure_13 === discountId) {
              obj = { duration: 1, percentage: 40, discountId: null };
              obj[2] = discountId;
              return obj;
            } else if (closure_6 === discountId) {
              obj = { duration: 1, percentage: 20, discountId: null };
              obj[2] = discountId;
              return obj;
            } else if (closure_7 === discountId) {
              obj1 = { duration: 1, percentage: 25, discountId: null };
              obj1[2] = discountId;
              return obj1;
            } else if (closure_8 === discountId) {
              const obj2 = { duration: 12, percentage: 20, discountId: null };
              obj2[2] = discountId;
              return obj2;
            } else if (closure_9 === discountId) {
              const obj3 = { duration: 12, percentage: 30, discountId: null };
              obj3[2] = discountId;
              return obj3;
            } else if (closure_16 === discountId) {
              const obj4 = { duration: 1, percentage: 40, discountId: null };
              obj4[2] = discountId;
              return obj4;
            } else if (closure_17 === discountId) {
              const obj5 = { duration: 3, percentage: 30, discountId: null };
              obj5[2] = discountId;
              return obj5;
            }
          }
        }
      }
      const obj6 = { duration: 3, percentage: 30, discountId: null };
      obj6[2] = discountId;
      return obj6;
    }
  }
  return { duration: 1, percentage: 30, discountId };
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let tmp2 = useDiscountOfferDefault(closure_10);
  const tmp3 = useDiscountOfferDefault(closure_11);
  [tmp5, require] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  [tmp7, tmp8] = callback(React.useState(false), 2);
  importDefault = tmp8;
  const tmp6 = callback(React.useState(false), 2);
  [tmp10, dependencyMap] = callback(React.useState(null), 2);
  if (tmp2 == null) {
    tmp2 = tmp3;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    let obj = { churnUserDiscountOffer: null, isFetchingChurnDiscountOffer: false };
    obj[0] = tmp2;
    return obj;
  } else if (arg0) {
    obj = { churnUserDiscountOffer: null, isFetchingChurnDiscountOffer: null };
    obj[0] = tmp10;
    obj[1] = tmp7;
    return obj;
  } else {
    let tmp11 = tmp7;
    if (!tmp7) {
      tmp11 = tmp5;
    }
    if (!tmp11) {
      tmp8(true);
      obj = getPaymentGateway;
      const churnDiscountOffer = obj.fetchChurnDiscountOffer();
      churnDiscountOffer.then((arg0) => {
        callback2(arg0);
        callback(true);
        tmp8(false);
      }).catch(() => {
        callback(true);
        tmp8(false);
      });
      const nextPromise = churnDiscountOffer.then((arg0) => {
        callback2(arg0);
        callback(true);
        tmp8(false);
      });
    }
    obj1 = { churnUserDiscountOffer: null, isFetchingChurnDiscountOffer: null };
    obj1[0] = tmp10;
    obj1[1] = tmp7;
    return obj1;
  }
  const tmp9 = callback(React.useState(null), 2);
};
export const useShouldFetchChurnOffer = function useShouldFetchChurnOffer() {
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getPremiumTypeSubscription());
  if (typeof useHasDiscountApplied !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = initialize;
  const tmp = require;
  const tmp3 = closure_5;
  const items1 = [tmp3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getPremiumTypeSubscription());
  let prop;
  if (stateFromStores1 != null) {
    const metadata = stateFromStores1.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp7 = null != prop;
  if (tmp7) {
    const _Date = Date;
    const tmp9 = hooksDefault;
    tmp7 = hooksDefault(Date.now()) <= hooksDefault(prop);
    const tmp9Result = hooksDefault(Date.now());
  }
  let tmp12 = null !== stateFromStores && stateFromStores.hasPremiumNitroMonthly && !tmp7;
  if (tmp12) {
    let hasActiveTrial;
    if (stateFromStores != null) {
      hasActiveTrial = stateFromStores.hasActiveTrial;
    }
    tmp12 = !hasActiveTrial;
  }
  return tmp12;
};
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(arg0) {
  const iter = arg0.invoiceItems[Symbol.iterator]();
  while (iter !== undefined) {
    let discounts = iter.next().discounts;
    let found = discounts.find((type) => type.type === callback(table[11]).InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
    let tmp2 = found;
    if (null != found) {
      let tmp3 = found;
      let discount_id = tmp2.discount_id;
      let tmp4 = closure_10;
      if (closure_10 === discount_id) {
        let obj = { duration: 1, percentage: null, discountId: null };
        ({ percentage_amount: obj2[1], discount_id: obj2[2] } = found);
        let tmp8 = iter;
        iter.return();
        return obj;
      } else {
        let tmp5 = closure_11;
        if (closure_11 === discount_id) {
          obj = { duration: 3, percentage: null, discountId: null };
          let tmp6 = found;
          ({ percentage_amount: obj[1], discount_id: obj[2] } = tmp2);
          let tmp7 = iter;
          iter.return();
          return obj;
        }
      }
    }
    continue;
  }
  return null;
};
export const useIsNUXEligible = function useIsNUXEligible() {
  return useIsInReverseTrial.useIsInReverseTrial();
};