// === Module 11100: SubscriptionUtils ===

// Module 11100 (SubscriptionUtils)
import _modDef38 from "module_38" /* 38 */;
import _modDef4461 from "module_4461" /* 4461 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6760 */;
import CheckoutError from "CheckoutError" /* 11101 */;
import PauseDuration from "PauseDuration" /* 11103 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4533 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f106432 = (planId) => {
  const value = SubscriptionPlanStore.get(planId.planId);
  _modDef38(null != value, "Unable to fetch plan");
  return value;
};
let _slicedToArray = _slicedToArray_mod;
({ SubscriptionStatusTypes: metroRequire, SubscriptionTypes: metroImportDefault } = Constants);
({ SubscriptionPlans: metroImportAll, SubscriptionPlanInfo: c9 } = PremiumConstants);
function getSubscriptionPlans(items) {
  items = items.items;
  return items.map(f106432);
}
function subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type === metroImportDefault.PREMIUM) {
    if (null == currentSubscriptionPlanIdForGroup) {
      return true;
    }
  }
  const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
  if (null == currentSubscriptionPlanIdForGroup) {
    const self3 = this;
    const self4 = this;
    const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
    const checkoutError = new CheckoutError.CheckoutError(obj2);
    throw checkoutError;
  } else {
    if (currentSubscriptionPlanIdForGroup === metroImportAll.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === metroImportAll.PREMIUM_MONTH_TIER_2) {
        const self = this;
        const self2 = this;
        const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
        const checkoutError1 = new CheckoutError.CheckoutError(obj3);
        throw checkoutError1;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_3;
  let first;
  let first1;
  let tmp6;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  const tmp2 = first1;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionPlanStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let value = null;
      if (null != closure_0) {
        value = SubscriptionPlanStore.get(tmp);
      }
      const items = [value, ];
      items[1] = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
      const isFetchingForSKUResult = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
      return items;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[11]);
  const tmp7 = _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6), 2);
  first1 = tmp7[0];
  _slicedToArray = tmp9;
  if (cResult[3] === arg1) {
    if (cResult[4] === tmp7[1]) {
      if (cResult[5] === arg0) {
        let tmp10;
        let tmp11;
        if (cResult[6] === first1) {
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        const effect = react.useEffect(tmp10, tmp11);
        return first1;
      }
    }
  }
  const fn2 = function f() {
    if (null == first1) {
      if (null != closure_0) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          const tmp5 = _modDef38;
          const tmp6 = null != React4[closure_0];
          tmp5(tmp6, "Missing hardcoded subscriptionPlan: " + closure_0);
          const fetchSubscriptionPlansForSKU = SubscriptionPlanActionCreators.fetchSubscriptionPlansForSKU;
          SubscriptionPlanActionCreators;
          const obj = PremiumUtils;
          const subscriptionPlansForSKU = fetchSubscriptionPlansForSKU(obj.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
        }
      }
    }
  };
  const items1 = [first1, arg0, arg1, tmp7[1]];
  cResult[3] = arg1;
  cResult[4] = tmp7[1];
  cResult[5] = arg0;
  cResult[6] = first1;
  cResult[7] = fn2;
  cResult[8] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_3;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [SubscriptionPlanStore];
  const tmp = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    let value = null;
    if (null != closure_0) {
      value = SubscriptionPlanStore.get(tmp);
    }
    const items = [value, ];
    items[1] = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
    const isFetchingForSKUResult = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
    return items;
  }), 2);
  first = tmp[0];
  _slicedToArray = tmp3;
  const items1 = [first, arg0, arg1, tmp[1]];
  const effect = react.useEffect(() => {
    if (null == first) {
      if (null != closure_0) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          const tmp5 = _modDef38;
          const tmp6 = null != React4[closure_0];
          tmp5(tmp6, "Missing hardcoded subscriptionPlan: " + closure_0);
          const fetchSubscriptionPlansForSKU = SubscriptionPlanActionCreators.fetchSubscriptionPlansForSKU;
          SubscriptionPlanActionCreators;
          const obj = PremiumUtils;
          const subscriptionPlansForSKU = fetchSubscriptionPlansForSKU(obj.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
        }
      }
    }
  }, items1);
  return first;
});
let result = size.fileFinishedImporting("utils/SubscriptionUtils.tsx");

export { getSubscriptionPlans };
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map(f106432);
  return mapped.map((skuId) => skuId.skuId);
};
export { subscriptionCanSwitchImmediately };
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  let flag;
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type !== metroImportDefault.PREMIUM) {
    const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
    if (null == currentSubscriptionPlanIdForGroup) {
      const self3 = this;
      const self4 = this;
      const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
      const checkoutError = new CheckoutError.CheckoutError(obj2);
      throw checkoutError;
    } else {
      if (currentSubscriptionPlanIdForGroup === metroImportAll.PREMIUM_YEAR_TIER_1) {
        if (newPlanId === metroImportAll.PREMIUM_MONTH_TIER_2) {
          const self = this;
          const self2 = this;
          const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
          const checkoutError1 = new CheckoutError.CheckoutError(obj3);
          throw checkoutError1;
        }
      }
      const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
      flag = index < arr.indexOf(newPlanId);
    }
  } else {
    flag = true;
  }
  return !flag;
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId, country) {
  const value = SubscriptionPlanStore.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    const tmp8 = _modDef38;
    const tmp9 = null != React4[subscriptionPlanId];
    tmp8(tmp9, "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const obj3 = PremiumUtils;
    const result = obj3.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    if (!SubscriptionPlanStore.isFetchingForSKU(result)) {
      const tmp12Result = SubscriptionPlanActionCreators;
      const subscriptionPlansForSKU = tmp12Result.fetchSubscriptionPlansForSKU(result, country);
    }
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = tmp4;
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  const keys = Object.keys(PauseDuration.PauseDuration);
  const found = keys.filter((item) => isNaN(Number(item)));
  if (status.status !== metroRequire.PAUSED) {
    return { durations: found, currentDaysPaused: 0 };
  } else if (null != status.pauseEndsAt) {
    const _Math = Math;
    const tmp6 = _modDef4461(status.currentPeriodStart);
    const obj2 = _modDef4461(status.pauseEndsAt);
    const rounded = Math.round(obj2.diff(tmp6, "days", true));
    const items = [];
    for (const item10042 of found) {
      if (PauseDuration.PauseDuration[item10042] > rounded) {
        let arr = items.push(item10042);
      }
      continue;
    }
    return { durations: items, currentDaysPaused: rounded };
  } else {
    return { durations: [], currentDaysPaused: 0 };
  }
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    const obj = _modDef4461;
    isMomentResult = obj.isMoment(isSameOrAfter);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(_modDef4461());
  }
  return isMomentResult;
};