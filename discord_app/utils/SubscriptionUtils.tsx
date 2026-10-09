// === Module 10468: SubscriptionUtils ===

// Module 10468 (SubscriptionUtils)
import _modDef38 from "module_38" /* 38 */;
import _modDef4661 from "module_4661" /* 4661 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6953 */;
import CheckoutError from "CheckoutError" /* 10469 */;
import PauseDuration from "PauseDuration" /* 10471 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4733 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ SubscriptionStatusTypes: metroRequire, SubscriptionTypes: closure_7 } = Constants);
const PremiumConstants = fn(1392);
({ SubscriptionPlans: closure_8, SubscriptionPlanInfo: closure_9 } = PremiumConstants);
const ReactCompilerGating = fn(558);
function getSubscriptionPlans(items) {
  items = items.items;
  return items.map((planId) => {
    value = SubscriptionPlanStore.get(planId.planId);
    _modDef38(null != value, "Unable to fetch plan");
    return value;
  });
}
function subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type === constants2.PREMIUM) {
    if (null == currentSubscriptionPlanIdForGroup) {
      return true;
    }
  }
  const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
  if (null == currentSubscriptionPlanIdForGroup) {
    const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
    const checkoutError = new CheckoutError.CheckoutError(obj2);
    throw checkoutError;
  } else {
    if (currentSubscriptionPlanIdForGroup === closure_1_8.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === closure_1_8.PREMIUM_MONTH_TIER_2) {
        const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
        const checkoutError1 = new CheckoutError.CheckoutError(obj3);
        throw checkoutError1;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("utils/SubscriptionUtils.tsx");

export { getSubscriptionPlans };
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map((planId) => {
    value = SubscriptionPlanStore.get(planId.planId);
    _modDef38(null != value, "Unable to fetch plan");
    return value;
  });
  return mapped.map((skuId) => skuId.skuId);
};
export { subscriptionCanSwitchImmediately };
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type !== constants2.PREMIUM) {
    const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
    if (null == currentSubscriptionPlanIdForGroup) {
      const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
      const checkoutError = new CheckoutError.CheckoutError(obj2);
      throw checkoutError;
    } else {
      if (currentSubscriptionPlanIdForGroup === closure_1_8.PREMIUM_YEAR_TIER_1) {
        if (newPlanId === closure_1_8.PREMIUM_MONTH_TIER_2) {
          const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
          const checkoutError1 = new CheckoutError.CheckoutError(obj3);
          throw checkoutError1;
        }
      }
      const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
      let flag = index < arr.indexOf(newPlanId);
    }
  } else {
    flag = true;
  }
  return !flag;
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId, arg1) {
  value = SubscriptionPlanStore.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    _modDef38(null != dependencyMap[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const tmp9 = null != dependencyMap[subscriptionPlanId];
    const result = PremiumUtils.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    if (!SubscriptionPlanStore.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = SubscriptionPlanActionCreators.fetchSubscriptionPlansForSKU(result, arg1);
      const tmp12Result = SubscriptionPlanActionCreators;
    }
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchSubscriptionPlan(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionPlanStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      value = null;
      if (null != closure_0) {
        value = SubscriptionPlanStore.get(tmp);
      }
      const items = [value, ];
      let isFetchingForSKUResult = null != value;
      if (isFetchingForSKUResult) {
        isFetchingForSKUResult = SubscriptionPlanStore.isFetchingForSKU(value.skuId);
      }
      items[1] = isFetchingForSKUResult;
      return items;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const tmp7 = _slicedToArray(require("initialize").useStateFromStoresArray(first, tmp6), 2);
  first1 = tmp7[0];
  _slicedToArray = tmp9;
  if (cResult[3] === arg1) {
    if (cResult[4] === tmp9) {
      if (cResult[5] === arg0) {
        if (cResult[6] === first1) {
          let tmp10 = cResult[7];
          let tmp11 = cResult[8];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        return first1;
      }
    }
  }
  const fn2 = function b() {
    if (null == first1) {
      if (null != closure_0) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          _modDef38(null != dependencyMap[closure_0], "Missing hardcoded subscriptionPlan: " + closure_0);
          const tmp6 = null != dependencyMap[closure_0];
          const obj = SubscriptionPlanActionCreators;
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(PremiumUtils.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
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
  const tmpResult = require("initialize");
}) : (function useGetOrFetchSubscriptionPlan(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [SubscriptionPlanStore];
  const tmp = _slicedToArray(require("initialize").useStateFromStoresArray(items, () => {
    value = null;
    if (null != closure_0) {
      value = SubscriptionPlanStore.get(tmp);
    }
    const items = [value, ];
    let isFetchingForSKUResult = null != value;
    if (isFetchingForSKUResult) {
      isFetchingForSKUResult = SubscriptionPlanStore.isFetchingForSKU(value.skuId);
    }
    items[1] = isFetchingForSKUResult;
    return items;
  }), 2);
  first = tmp[0];
  _slicedToArray = tmp3;
  const items1 = [first, arg0, arg1, tmp[1]];
  const effect = noop.useEffect(() => {
    if (null == first) {
      if (null != closure_0) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          _modDef38(null != dependencyMap[closure_0], "Missing hardcoded subscriptionPlan: " + closure_0);
          const tmp6 = null != dependencyMap[closure_0];
          const obj = SubscriptionPlanActionCreators;
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(PremiumUtils.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
        }
      }
    }
  }, items1);
  return first;
});
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  const keys = Object.keys(PauseDuration.PauseDuration);
  const found = keys.filter((item) => isNaN(Number(item)));
  if (status.status !== constants.PAUSED) {
    const obj3 = { durations: found, currentDaysPaused: 0 };
    return obj3;
  } else if (null != status.pauseEndsAt) {
    const tmp6 = _modDef4661(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(_modDef4661(status.pauseEndsAt).diff(tmp6, "days", true));
    const items = [];
    for (const item10042 of found) {
      if (PauseDuration.PauseDuration[item10042] > rounded) {
        let arr = items.push(item10042);
      }
      continue;
    }
    const obj4 = { durations: items, currentDaysPaused: rounded };
    return obj4;
  } else {
    const obj = { durations: [], currentDaysPaused: 0 };
    return obj;
  }
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    isMomentResult = _modDef4661.isMoment(isSameOrAfter);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(_modDef4661());
  }
  return isMomentResult;
};