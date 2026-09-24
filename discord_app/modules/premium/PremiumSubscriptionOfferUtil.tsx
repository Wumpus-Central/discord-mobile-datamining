// === Module 8407: PremiumSubscriptionOfferUtil ===

// Module 8407 (PremiumSubscriptionOfferUtil)
import initialize from "initialize" /* 504 */;
import Server from "Server" /* 1978 */;
import _modDef4416 from "module_4416" /* 4416 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7777 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 8408 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8409 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 8410 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8411 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 8414 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4489 */;

const require = globalThis.__r;

require = fn;
function getDiscountInfo(active_discount_id) {
  if (closure_1_10 !== active_discount_id) {
    if (closure_1_12 !== active_discount_id) {
      if (closure_1_19 === active_discount_id) {
        const obj2 = { duration: 1, percentage: 10, discountId: active_discount_id };
        return obj2;
      } else if (closure_1_20 === active_discount_id) {
        const obj3 = { duration: 1, percentage: 50, discountId: active_discount_id };
        return obj3;
      } else {
        if (closure_1_11 !== active_discount_id) {
          if (closure_1_14 !== active_discount_id) {
            if (__initData !== active_discount_id) {
              if (map1 === active_discount_id) {
                const obj4 = { duration: 1, percentage: 40, discountId: active_discount_id };
                return obj4;
              } else if (timestampProducer === active_discount_id) {
                const obj5 = { duration: 1, percentage: 20, discountId: active_discount_id };
                return obj5;
              } else if (React5 === active_discount_id) {
                const obj6 = { duration: 1, percentage: 25, discountId: active_discount_id };
                return obj6;
              } else if (React6 === active_discount_id) {
                const obj7 = { duration: 12, percentage: 20, discountId: active_discount_id };
                return obj7;
              } else if (React7 === active_discount_id) {
                const obj8 = { duration: 12, percentage: 30, discountId: active_discount_id };
                return obj8;
              } else if (value2 === active_discount_id) {
                const obj9 = { duration: 1, percentage: 40, discountId: active_discount_id };
                return obj9;
              } else if (collapsedCategories === active_discount_id) {
                const obj10 = { duration: 3, percentage: 30, discountId: active_discount_id };
                return obj10;
              } else if (closure_1_17 === active_discount_id) {
                const obj = { duration: 1, percentage: 30, discountId: active_discount_id };
                return obj;
              }
            }
          }
        }
        const obj11 = { duration: 3, percentage: 30, discountId: active_discount_id };
        return obj11;
      }
    }
  }
  return { duration: 1, percentage: 30, discountId: active_discount_id };
}
const PremiumConstants = fn(1374);
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18, PREMIUM_TIER_2_CHURN_1_MONTH_10_PERCENT_DISCOUNT_ID: closure_19, PREMIUM_TIER_2_CHURN_1_MONTH_50_PERCENT_DISCOUNT_ID: closure_20, CHURN_DISCOUNT_IDS: closure_21 } = PremiumConstants);
function useHasDiscountApplied() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
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
    tmp4 = _modDef4416(Date.now()) <= _modDef4416(prop);
    const tmp6Result = _modDef4416(Date.now());
  }
  return tmp4;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  usePremiumDiscountOffer;
  if (typeof useHasDiscountApplied === "function") {
    const items = [SubscriptionStore];
    const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
    let prop;
    if (stateFromStores != null) {
      const metadata = stateFromStores.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp12 = null != prop;
    if (tmp12) {
      const _Date = Date;
      tmp12 = _modDef4416(Date.now()) <= _modDef4416(prop);
      const tmp14Result = _modDef4416(Date.now());
    }
    return null != premiumTrialOffer || hasActiveTrial || null != premiumDiscountOffer || null != tmp7 || tmp12;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useHasDiscountApplied };
export { getDiscountInfo };
export const useActiveDiscountInfo = function useActiveDiscountInfo() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let active_discount_id;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  return getDiscountInfo(active_discount_id);
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let tmp2 = useDiscountOfferDefault(closure_1_10);
  const tmp3 = useDiscountOfferDefault(closure_1_19);
  const tmp4 = useDiscountOfferDefault(closure_1_20);
  const tmp5 = useDiscountOfferDefault(closure_1_11);
  [tmp7, require] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, tmp10] = noop.useState(false);
  importDefault = tmp10;
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  [tmp12, dependencyMap] = noop.useState(null);
  if (tmp2 == null) {
    tmp2 = tmp3;
  }
  if (tmp2 == null) {
    tmp2 = tmp4;
  }
  if (tmp2 == null) {
    tmp2 = tmp5;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    const obj2 = { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
    return obj2;
  } else if (arg0) {
    const obj3 = { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    return obj3;
  } else {
    let tmp13 = tmp9;
    if (!tmp9) {
      tmp13 = tmp7;
    }
    if (!tmp13) {
      tmp10(true);
      const churnDiscountOffer = UserOfferActionCreators.fetchChurnDiscountOffer();
      churnDiscountOffer.then((result) => {
        dependencyMap(result);
        require(true);
        tmp10(false);
      }).catch(() => {
        require(true);
        tmp10(false);
      });
      const nextPromise = churnDiscountOffer.then((result) => {
        dependencyMap(result);
        require(true);
        tmp10(false);
      });
    }
    const obj4 = { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    return obj4;
  }
  const tmp11 = _slicedToArray(noop.useState(null), 2);
};
export const useShouldFetchChurnOffer = function useShouldFetchChurnOffer() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  if (typeof useHasDiscountApplied === "function") {
    const items1 = [SubscriptionStore];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => SubscriptionStore.getPremiumTypeSubscription());
    let prop;
    if (stateFromStores1 != null) {
      const metadata = stateFromStores1.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp8 = null != prop;
    if (tmp8) {
      const _Date = Date;
      tmp8 = _modDef4416(Date.now()) <= _modDef4416(prop);
      const tmp10Result = _modDef4416(Date.now());
    }
    let tmp13 = null !== stateFromStores && stateFromStores.hasPremiumNitroMonthly && !tmp8;
    if (tmp13) {
      let hasActiveTrial;
      if (stateFromStores != null) {
        hasActiveTrial = stateFromStores.hasActiveTrial;
      }
      tmp13 = !hasActiveTrial;
    }
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(arg0) {
  const iter = arg0.invoiceItems[Symbol.iterator]();
  while (iter !== undefined) {
    let discounts = iter.next().discounts;
    let found = discounts.find((type) => type.type === Server.InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
    let tmp2 = found;
    let discount_id;
    if (found != null) {
      discount_id = found.discount_id;
    }
    if (null != discount_id) {
      if (__initData.includes(tmp2.discount_id)) {
        let tmp8 = getDiscountInfo(tmp2.discount_id);
        let duration;
        if (tmp8 != null) {
          duration = tmp8.duration;
        }
        let obj = { duration, percentage: null, discountId: null };
        ({ percentage_amount: obj.percentage, discount_id: obj.discountId } = found);
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return null;
};
export const useIsNUXEligible = function useIsNUXEligible() {
  return ReverseTrialUtils.useIsInReverseTrial();
};