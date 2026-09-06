// === Module 11441: SubscriptionUtils ===

// Module 11441 (SubscriptionUtils)
import _modDef38 from "module_38" /* 38 */;
import _modDef4153 from "module_4153" /* 4153 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7257 */;
import CheckoutError from "CheckoutError" /* 11442 */;
import PauseDuration from "PauseDuration" /* 11444 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;

require = fn;
const Constants = fn(1074);
({ SubscriptionStatusTypes: metroRequire, SubscriptionTypes: closure_7 } = Constants);
const PremiumConstants = fn(1373);
({ SubscriptionPlans: closure_8, SubscriptionPlanInfo: closure_9 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("utils/SubscriptionUtils.tsx");

export const getSubscriptionPlans = function getSubscriptionPlans(items) {
  items = items.items;
  return items.map((planId) => {
    value = SubscriptionPlanStore.get(planId.planId);
    _modDef38(null != value, "Unable to fetch plan");
    return value;
  });
};
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map((planId) => {
    value = SubscriptionPlanStore.get(planId.planId);
    _modDef38(null != value, "Unable to fetch plan");
    return value;
  });
  return mapped.map((skuId) => skuId.skuId);
};
export const subscriptionCanSwitchImmediately = function subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type === constants2.PREMIUM) {
    if (null == currentSubscriptionPlanIdForGroup) {
      return true;
    }
  }
  let obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
  if (null == currentSubscriptionPlanIdForGroup) {
    obj = { message: "Current subscription has no plan in group", extraSentryInformation: null };
    obj.extraSentryInformation = obj;
    const checkoutError = new CheckoutError.CheckoutError(obj);
    throw checkoutError;
  } else {
    if (currentSubscriptionPlanIdForGroup === React6.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === React6.PREMIUM_MONTH_TIER_2) {
        obj = { message: "Unexpected plan switch", extraSentryInformation: null };
        obj.extraSentryInformation = obj;
        const checkoutError1 = new CheckoutError.CheckoutError(obj);
        throw checkoutError1;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
};
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type !== constants2.PREMIUM) {
    let obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
    if (null == currentSubscriptionPlanIdForGroup) {
      obj = { message: "Current subscription has no plan in group", extraSentryInformation: null };
      obj.extraSentryInformation = obj;
      const checkoutError = new CheckoutError.CheckoutError(obj);
      throw checkoutError;
    } else {
      if (currentSubscriptionPlanIdForGroup === React6.PREMIUM_YEAR_TIER_1) {
        if (newPlanId === React6.PREMIUM_MONTH_TIER_2) {
          obj = { message: "Unexpected plan switch", extraSentryInformation: null };
          obj.extraSentryInformation = obj;
          const checkoutError1 = new CheckoutError.CheckoutError(obj);
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
    const tmp12 = require;
    const tmp9 = null != dependencyMap[subscriptionPlanId];
    const result = PremiumUtils.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    if (!SubscriptionPlanStore.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = tmp12(7257).fetchSubscriptionPlansForSKU(result, arg1);
      const tmp12Result = tmp12(7257);
    }
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId, arg1) {
  _require = subscriptionPlanId;
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
  const items1 = [first, subscriptionPlanId, arg1, tmp[1]];
  const effect = noop.useEffect(() => {
    if (null == first) {
      if (null != closure_0) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          _modDef38(null != dependencyMap[tmp12], "Missing hardcoded subscriptionPlan: " + tmp12);
          const tmp6 = null != dependencyMap[tmp12];
          const obj = SubscriptionPlanActionCreators;
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(PremiumUtils.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
        }
      }
    }
  }, items1);
  return first;
};
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  const keys = Object.keys(PauseDuration.PauseDuration);
  const found = keys.filter((item) => isNaN(Number(item)));
  if (status.status !== constants.PAUSED) {
    let obj = { durations: found, currentDaysPaused: 0 };
    return obj;
  } else if (null != status.pauseEndsAt) {
    const tmp6 = _modDef4153(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(_modDef4153(status.pauseEndsAt).diff(tmp6, "days", true));
    const items = [];
    for (const item10042 of found) {
      let tmp10 = item10042;
      if (PauseDuration.PauseDuration[item10042] > rounded) {
        let arr = items.push(tmp10);
      }
      continue;
    }
    obj = { durations: items, currentDaysPaused: rounded };
    return obj;
  } else {
    obj = { durations: [], currentDaysPaused: 0 };
    return obj;
  }
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    isMomentResult = _modDef4153.isMoment(isSameOrAfter);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(_modDef4153());
  }
  return isMomentResult;
};