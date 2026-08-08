// discord_app/utils/SubscriptionUtils.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import addSubscriptionPlan from "addSubscriptionPlan";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { t } from "../../_runtime/03883_t.js";
import { 00038__ } from "../../_runtime/metro/00038__.js";
import { PauseDuration } from "../../discord_common/js/shared/shared-constants/PauseDuration.tsx";
import { prototype } from "../modules/checkout/CheckoutError.tsx";
import { getPremiumPlanItem } from "PremiumUtils.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ SubscriptionStatusTypes: closure_6, SubscriptionTypes: error } = ME);
({ SubscriptionPlans: metroImportAll, SubscriptionPlanInfo: c9 } = GuildFeatures);
let result = require("addSubscriptionPlan").fileFinishedImporting("utils/SubscriptionUtils.tsx");

export const getSubscriptionPlans = function getSubscriptionPlans(items) {
  items = items.items;
  return items.map((planId) => {
    const value = addSubscriptionPlan.get(planId.planId);
    callback(table[5])(null != value, "Unable to fetch plan");
    return value;
  });
};
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map((planId) => {
    const value = addSubscriptionPlan.get(planId.planId);
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
  const value = addSubscriptionPlan.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    00038__(null != table[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const tmp12 = require;
    const tmp8 = 00038__;
    const tmp9 = null != table[subscriptionPlanId];
    const result = getPremiumPlanItem.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    if (!addSubscriptionPlan.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = tmp12(5877).fetchSubscriptionPlansForSKU(result, closure_1);
      const tmp12Result = tmp12(5877);
    }
    const obj3 = getPremiumPlanItem;
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId) {
  const _require = subscriptionPlanId;
  let closure_1 = arg1;
  let items = [addSubscriptionPlan];
  const tmp = callback(_require(first[9]).useStateFromStoresArray(items, () => {
    let value = null;
    if (null != closure_0) {
      value = outer1_5.get(tmp);
    }
    const items = [value, ];
    let isFetchingForSKUResult = null != value;
    if (isFetchingForSKUResult) {
      isFetchingForSKUResult = outer1_5.isFetchingForSKU(value.skuId);
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
        if (!_slicedToArray) {
          const _HermesInternal = HermesInternal;
          callback(first[5])(null != outer1_9[tmp12], "Missing hardcoded subscriptionPlan: " + tmp12);
          const tmp5 = callback(first[5]);
          const tmp6 = null != outer1_9[tmp12];
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
    const tmp6 = t(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(t(status.pauseEndsAt).diff(tmp6, "days", true));
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
    isMomentResult = t.isMoment(isSameOrAfter);
    const obj = t;
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(t());
  }
  return isMomentResult;
};