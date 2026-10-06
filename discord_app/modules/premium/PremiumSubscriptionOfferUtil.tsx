// === Module 7740: PremiumSubscriptionOfferUtil ===

// Module 7740 (PremiumSubscriptionOfferUtil)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Server from "Server" /* 1985 */;
import _modDef4467 from "module_4467" /* 4467 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6969 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 7741 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7742 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 7743 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7744 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 7747 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function getDiscountInfo(active_discount_id) {
  if (authStore !== active_discount_id) {
    if (closure_12 !== active_discount_id) {
      if (closure_19 === active_discount_id) {
        return { duration: 1, percentage: 10, discountId: active_discount_id };
      } else if (closure_20 === active_discount_id) {
        return { duration: 1, percentage: 50, discountId: active_discount_id };
      } else {
        if (unpackModuleId !== active_discount_id) {
          if (authStore2 !== active_discount_id) {
            if (closure_15 !== active_discount_id) {
              if (map1 === active_discount_id) {
                return { duration: 1, percentage: 40, discountId: active_discount_id };
              } else if (metroRequire === active_discount_id) {
                return { duration: 1, percentage: 20, discountId: active_discount_id };
              } else if (metroImportDefault === active_discount_id) {
                return { duration: 1, percentage: 25, discountId: active_discount_id };
              } else if (metroImportAll === active_discount_id) {
                return { duration: 12, percentage: 20, discountId: active_discount_id };
              } else if (React4 === active_discount_id) {
                return { duration: 12, percentage: 30, discountId: active_discount_id };
              } else if (authStore3 === active_discount_id) {
                return { duration: 1, percentage: 40, discountId: active_discount_id };
              } else if (authStore4 === active_discount_id) {
                return { duration: 3, percentage: 30, discountId: active_discount_id };
              } else if (closure_17 === active_discount_id) {
                return { duration: 1, percentage: 30, discountId: active_discount_id };
              }
            }
          }
        }
        return { duration: 3, percentage: 30, discountId: active_discount_id };
      }
    }
  }
  return { duration: 1, percentage: 30, discountId: active_discount_id };
}
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: metroImportDefault, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: metroImportAll, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: c9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18, PREMIUM_TIER_2_CHURN_1_MONTH_10_PERCENT_DISCOUNT_ID: closure_19, PREMIUM_TIER_2_CHURN_1_MONTH_50_PERCENT_DISCOUNT_ID: closure_20, CHURN_DISCOUNT_IDS: closure_21 } = PremiumConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = PremiumSubscriptionTrialUtil;
  const hasActiveTrial = obj2.useHasActiveTrial();
  const obj3 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  const obj4 = usePremiumDiscountOffer;
  const premiumGroupDiscountOffer = obj4.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  const tmp5 = closure_22();
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
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = PremiumSubscriptionTrialUtil;
  const hasActiveTrial = obj2.useHasActiveTrial();
  const obj3 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  const obj4 = usePremiumDiscountOffer;
  const premiumGroupDiscountOffer = obj4.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  const tmp5 = closure_22();
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let premiumTypeSubscription;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
      const tmp12 = _modDef4467;
      const tmp12Result = tmp12(Date.now());
      tmp10 = tmp12Result <= _modDef4467(prop);
    }
    cResult[2] = prop;
    cResult[3] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
    const tmp6 = _modDef4467;
    const tmp6Result = tmp6(Date.now());
    tmp4 = tmp6Result <= _modDef4467(prop);
  }
  return tmp4;
});
let closure_22 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let premiumTypeSubscription;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let active_discount_id;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  return getDiscountInfo(active_discount_id);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let closure_129_2;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  let tmp4 = useDiscountOfferDefault(authStore);
  const tmp5 = useDiscountOfferDefault(closure_19);
  const tmp6 = useDiscountOfferDefault(closure_20);
  const tmp7 = useDiscountOfferDefault(unpackModuleId);
  [tmp9, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp11, tmp12] = react.useState(false);
  let closure_1 = tmp12;
  _slicedToArray(react.useState(false), 2);
  [tmp14, closure_129_2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
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
    let tmp20;
    if (cResult[0] !== tmp4) {
      const obj2 = { churnUserDiscountOffer: tmp4, isFetchingChurnDiscountOffer: false };
      cResult[0] = tmp4;
      cResult[1] = obj2;
      tmp20 = obj2;
    } else {
      tmp20 = cResult[1];
    }
    return tmp20;
  } else {
    const tmp21 = arg0;
    if (tmp21) {
      if (cResult[2] === tmp14) {
        let tmp19;
        if (cResult[3] === tmp11) {
          tmp19 = cResult[4];
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
      const tmp15 = tmp11 || tmp9;
      if (!tmp15) {
        tmp12(true);
        const tmpResult = UserOfferActionCreators;
        const churnDiscountOffer = tmpResult.fetchChurnDiscountOffer();
        const nextPromise = churnDiscountOffer.then((result) => {
          closure_1_2(result);
          if (typeof onFetchComplete === "function") {
            closure_1_0(true);
            tmp12(false);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        nextPromise.catch(() => {
          if (typeof onFetchComplete === "function") {
            closure_1_0(true);
            tmp12(false);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      }
      if (cResult[5] === tmp14) {
        let tmp18;
        if (cResult[6] === tmp11) {
          tmp18 = cResult[7];
        }
        return tmp18;
      }
      const obj4 = { churnUserDiscountOffer: tmp14, isFetchingChurnDiscountOffer: tmp11 };
      cResult[5] = tmp14;
      cResult[6] = tmp11;
      cResult[7] = obj4;
      tmp18 = obj4;
    }
  }
}) : ((arg0) => {
  let closure_129_0;
  let closure_129_2;
  let tmp10;
  let tmp12;
  let tmp7;
  let tmp9;
  let tmp2 = useDiscountOfferDefault(authStore);
  const tmp3 = useDiscountOfferDefault(closure_19);
  const tmp4 = useDiscountOfferDefault(closure_20);
  const tmp5 = useDiscountOfferDefault(unpackModuleId);
  [tmp7, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp9, tmp10] = react.useState(false);
  let closure_1 = tmp10;
  _slicedToArray(react.useState(false), 2);
  [tmp12, closure_129_2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
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
    return { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
  } else {
    const tmp17 = arg0;
    if (tmp17) {
      return { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    } else {
      const tmp13 = tmp9 || tmp7;
      if (!tmp13) {
        tmp10(true);
        const obj = UserOfferActionCreators;
        const churnDiscountOffer = obj.fetchChurnDiscountOffer();
        const nextPromise = churnDiscountOffer.then((result) => {
          closure_1_2(result);
          closure_1_0(true);
          tmp10(false);
        });
        nextPromise.catch(() => {
          closure_1_0(true);
          tmp10(false);
        });
      }
      return { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let premiumTypeSubscription;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const tmp8 = closure_22();
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
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const tmp2 = closure_22();
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
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = tmp3;
export const useHasDiscountApplied = tmp4;
export { getDiscountInfo };
export const useActiveDiscountInfo = tmp5;
export const useFetchChurnUserDiscountOffer = tmp6;
export const useShouldFetchChurnOffer = tmp7;
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
      if (closure_21.includes(tmp2.discount_id)) {
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
export const useIsNUXEligible = () => {
  const obj = ReverseTrialUtils;
  return obj.useIsInReverseTrial();
};