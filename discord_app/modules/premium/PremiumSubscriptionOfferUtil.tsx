// === Module 7740: PremiumSubscriptionOfferUtil ===

// Module 7740 (PremiumSubscriptionOfferUtil)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import Server from "Server" /* 1985 */;
import _modDef4467 from "module_4467" /* 4467 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6969 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 7741 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7742 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 7743 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7744 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 7747 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;

require = fn;
function getDiscountInfo(active_discount_id) {
  if (v65535 !== active_discount_id) {
    if (__initData !== active_discount_id) {
      if (closure_1_19 === active_discount_id) {
        const obj2 = { duration: 1, percentage: 10, discountId: active_discount_id };
        return obj2;
      } else if (closure_1_20 === active_discount_id) {
        const obj3 = { duration: 1, percentage: 50, discountId: active_discount_id };
        return obj3;
      } else {
        if (closure_1_11 !== active_discount_id) {
          if (state !== active_discount_id) {
            if (closure_1_15 !== active_discount_id) {
              if (__initData2 === active_discount_id) {
                const obj4 = { duration: 1, percentage: 40, discountId: active_discount_id };
                return obj4;
              } else if (timestampProducer === active_discount_id) {
                const obj5 = { duration: 1, percentage: 20, discountId: active_discount_id };
                return obj5;
              } else if (React5 === active_discount_id) {
                const obj6 = { duration: 1, percentage: 25, discountId: active_discount_id };
                return obj6;
              } else if (closure_1_8 === active_discount_id) {
                const obj7 = { duration: 12, percentage: 20, discountId: active_discount_id };
                return obj7;
              } else if (options === active_discount_id) {
                const obj8 = { duration: 12, percentage: 30, discountId: active_discount_id };
                return obj8;
              } else if (value2 === active_discount_id) {
                const obj9 = { duration: 1, percentage: 40, discountId: active_discount_id };
                return obj9;
              } else if (collapsedCategories === active_discount_id) {
                const obj10 = { duration: 3, percentage: 30, discountId: active_discount_id };
                return obj10;
              } else if (constants === active_discount_id) {
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
const PremiumConstants = fn(1379);
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18, PREMIUM_TIER_2_CHURN_1_MONTH_10_PERCENT_DISCOUNT_ID: closure_19, PREMIUM_TIER_2_CHURN_1_MONTH_50_PERCENT_DISCOUNT_ID: closure_20, CHURN_DISCOUNT_IDS: closure_21 } = PremiumConstants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  if (cResult[2] !== prop) {
    let tmp10 = null != prop;
    if (tmp10) {
      const _Date = Date;
      tmp10 = _modDef4467(Date.now()) <= _modDef4467(prop);
      const tmp12Result = _modDef4467(Date.now());
    }
    cResult[2] = prop;
    cResult[3] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
    tmp4 = _modDef4467(Date.now()) <= _modDef4467(prop);
    const tmp6Result = _modDef4467(Date.now());
  }
  return tmp4;
});
let closure_22 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const premiumGroupDiscountOffer = usePremiumDiscountOffer.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  if (!tmp6) {
    tmp6 = hasActiveTrial;
  }
  if (!tmp6) {
    tmp6 = null != premiumDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = null != premiumGroupDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
}) : (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const premiumGroupDiscountOffer = usePremiumDiscountOffer.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  if (!tmp6) {
    tmp6 = hasActiveTrial;
  }
  if (!tmp6) {
    tmp6 = null != premiumDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = null != premiumGroupDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let active_discount_id;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  if (cResult[2] !== active_discount_id) {
    const tmp11 = getDiscountInfo(active_discount_id);
    cResult[2] = active_discount_id;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
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
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  let tmp4 = useDiscountOfferDefault(v65535);
  const tmp5 = useDiscountOfferDefault(closure_1_19);
  const tmp6 = useDiscountOfferDefault(closure_1_20);
  const tmp7 = useDiscountOfferDefault(closure_1_11);
  [tmp9, require] = noop.useState(false);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  [tmp11, tmp12] = noop.useState(false);
  importDefault = tmp12;
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  [tmp14, dependencyMap] = noop.useState(null);
  if (tmp4 == null) {
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    tmp4 = tmp6;
  }
  if (tmp4 == null) {
    tmp4 = tmp7;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  if (null != tmp4) {
    if (cResult[0] !== tmp4) {
      const obj2 = { churnUserDiscountOffer: tmp4, isFetchingChurnDiscountOffer: false };
      cResult[0] = tmp4;
      cResult[1] = obj2;
      let tmp20 = obj2;
    } else {
      tmp20 = cResult[1];
    }
    return tmp20;
  } else if (arg0) {
    if (cResult[2] === tmp14) {
      if (cResult[3] === tmp11) {
        let tmp19 = cResult[4];
      }
      return tmp19;
    }
    const obj3 = { churnUserDiscountOffer: tmp14, isFetchingChurnDiscountOffer: tmp11 };
    cResult[2] = tmp14;
    cResult[3] = tmp11;
    cResult[4] = obj3;
    tmp19 = obj3;
  } else {
    function onFetchComplete() {

    }
    let tmp15 = tmp11;
    if (!tmp11) {
      tmp15 = tmp9;
    }
    if (!tmp15) {
      tmp12(true);
      const churnDiscountOffer = UserOfferActionCreators.fetchChurnDiscountOffer();
      const tmpResult = UserOfferActionCreators;
      churnDiscountOffer.then((result) => {
        dependencyMap(result);
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp12(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }).catch(() => {
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp12(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      const nextPromise = churnDiscountOffer.then((result) => {
        dependencyMap(result);
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp12(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
    if (cResult[5] === tmp14) {
      if (cResult[6] === tmp11) {
        let tmp18 = cResult[7];
      }
      return tmp18;
    }
    const obj4 = { churnUserDiscountOffer: tmp14, isFetchingChurnDiscountOffer: tmp11 };
    cResult[5] = tmp14;
    cResult[6] = tmp11;
    cResult[7] = obj4;
    tmp18 = obj4;
  }
  const tmp13 = _slicedToArray(noop.useState(null), 2);
}) : ((arg0) => {
  let tmp2 = useDiscountOfferDefault(v65535);
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
});
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = tmp3;
export const useHasDiscountApplied = tmp4;
export { getDiscountInfo };
export const useActiveDiscountInfo = tmp5;
export const useFetchChurnUserDiscountOffer = tmp6;
export const useShouldFetchChurnOffer = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const tmpResult = initialize;
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = stateFromStores.hasPremiumNitroMonthly;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = !tmp8;
  }
  if (hasPremiumNitroMonthly) {
    let hasActiveTrial;
    if (stateFromStores != null) {
      hasActiveTrial = stateFromStores.hasActiveTrial;
    }
    hasPremiumNitroMonthly = !hasActiveTrial;
  }
  return hasPremiumNitroMonthly;
}) : (() => {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasPremiumNitroMonthly = null !== stateFromStores;
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = stateFromStores.hasPremiumNitroMonthly;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = !tmp2;
  }
  if (hasPremiumNitroMonthly) {
    let hasActiveTrial;
    if (stateFromStores != null) {
      hasActiveTrial = stateFromStores.hasActiveTrial;
    }
    hasPremiumNitroMonthly = !hasActiveTrial;
  }
  return hasPremiumNitroMonthly;
});
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
      if (guild.includes(tmp2.discount_id)) {
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
export const useIsNUXEligible = () => ReverseTrialUtils.useIsInReverseTrial();