// === Module 11441: getSubscriptionPlans ===

// Module 11441 (getSubscriptionPlans)
import _modDef38 from "module_38" /* 38 */;
import hooksDefault from "hooks" /* 4153 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4218 */;
import prototype from "prototype" /* 11442 */;
import PauseDuration from "PauseDuration" /* 11444 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "addSubscriptionPlan" /* 4223 */;
import ME from "ME" /* 1074 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

require = arg1;
({ SubscriptionStatusTypes: closure_6, SubscriptionTypes: error } = ME);
({ SubscriptionPlans: closure_8, SubscriptionPlanInfo: c9 } = GuildFeatures);
let result = require("set").fileFinishedImporting("utils/SubscriptionUtils.tsx");

export const getSubscriptionPlans = function getSubscriptionPlans(items) {
  items = items.items;
  return items.map((planId) => {
    const value = closure_5.get(planId.planId);
    callback(table[5])(null != value, "Unable to fetch plan");
    return value;
  });
};
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map((planId) => {
    const value = closure_5.get(planId.planId);
    callback(table[5])(null != value, "Unable to fetch plan");
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
    obj[1] = obj;
    const checkoutError = new prototype.CheckoutError(obj);
    throw checkoutError;
  } else {
    if (currentSubscriptionPlanIdForGroup === closure_8.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === closure_8.PREMIUM_MONTH_TIER_2) {
        obj = { message: "Unexpected plan switch", extraSentryInformation: null };
        obj[1] = obj;
        const checkoutError1 = new prototype.CheckoutError(obj);
        throw checkoutError1;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
};
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, arg1, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type !== constants2.PREMIUM) {
    let obj = { oldPlanId: null, newPlanId: null };
    obj[0] = currentSubscriptionPlanIdForGroup;
    obj[1] = arg1;
    if (null == currentSubscriptionPlanIdForGroup) {
      obj = { message: "Current subscription has no plan in group", extraSentryInformation: null };
      obj[1] = obj;
      const checkoutError = new prototype.CheckoutError(obj);
      throw checkoutError;
    } else {
      if (currentSubscriptionPlanIdForGroup === closure_8.PREMIUM_YEAR_TIER_1) {
        if (arg1 === closure_8.PREMIUM_MONTH_TIER_2) {
          obj = { message: "Unexpected plan switch", extraSentryInformation: null };
          obj[1] = obj;
          const checkoutError1 = new prototype.CheckoutError(obj);
          throw checkoutError1;
        }
      }
      const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
      let flag = index < arr.indexOf(arg1);
    }
  } else {
    flag = true;
  }
  return !flag;
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId, closure_1) {
  const value = closure_5.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    _modDef38(null != table[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const tmp12 = require;
    const tmp8 = _modDef38;
    const tmp9 = null != table[subscriptionPlanId];
    const result = getPremiumPlanItem.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    if (!closure_5.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = tmp12(7257).fetchSubscriptionPlansForSKU(result, closure_1);
      const tmp12Result = tmp12(7257);
    }
    const obj3 = getPremiumPlanItem;
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId) {
  const _require = subscriptionPlanId;
  closure_1 = arg1;
  let items = [closure_5];
  const tmp = callback(_require(first[9]).useStateFromStoresArray(items, () => {
    let value = null;
    if (null != closure_0) {
      value = closure_1_5.get(tmp);
    }
    const items = [value, ];
    let isFetchingForSKUResult = null != value;
    if (isFetchingForSKUResult) {
      isFetchingForSKUResult = closure_1_5.isFetchingForSKU(value.skuId);
    }
    items[1] = isFetchingForSKUResult;
    return items;
  }), 2);
  first = tmp[0];
  callback = tmp3;
  const items1 = [first, subscriptionPlanId, arg1, tmp[1]];
  const effect = React.useEffect(() => {
    if (null == first) {
      if (null != subscriptionPlanId) {
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          callback(first[5])(null != closure_1_9[tmp12], "Missing hardcoded subscriptionPlan: " + tmp12);
          const tmp5 = callback(first[5]);
          const tmp6 = null != closure_1_9[tmp12];
          const obj = subscriptionPlanId(first[8]);
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(subscriptionPlanId(first[7]).castPremiumSubscriptionAsSkuId(tmp2.skuId), callback);
          const obj2 = subscriptionPlanId(first[7]);
        }
      }
    }
  }, items1);
  return first;
};
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  const keys = Object.keys(PauseDuration.PauseDuration);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  if (status.status !== constants.PAUSED) {
    let obj = { durations: null, currentDaysPaused: 0 };
    obj[0] = found;
    return obj;
  } else if (null != status.pauseEndsAt) {
    const tmp6 = hooksDefault(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(hooksDefault(status.pauseEndsAt).diff(tmp6, "days", true));
    const items = [];
    for (const item10042 of found) {
      let tmp11 = require;
      let tmp12 = dependencyMap;
      let tmp13 = dependencyMap;
      let tmp10 = item10042;
      if (PauseDuration.PauseDuration[item10042] > rounded) {
        let tmp14 = item10042;
        let arr = items.push(tmp10);
      }
      continue;
    }
    obj = { durations: null, currentDaysPaused: null };
    obj[0] = items;
    obj[1] = rounded;
    return obj;
  } else {
    obj = { durations: null, currentDaysPaused: 0 };
    obj[0] = [];
    return obj;
  }
  const tmp = dependencyMap;
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    isMomentResult = hooksDefault.isMoment(isSameOrAfter);
    const obj = hooksDefault;
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(hooksDefault());
  }
  return isMomentResult;
};