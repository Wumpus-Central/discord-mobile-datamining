// === Module 4120: getNonePlanIdForIntervalType ===

// Module 4120 (getNonePlanIdForIntervalType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;

({ SubscriptionPlans: c0, SubscriptionPlanInfo: closure_1, PremiumSubscriptionSKUs: obj1 } = GuildFeatures);
const result = set.fileFinishedImporting("modules/premium/PremiumSubscription.tsx");

export const getNonePlanIdForIntervalType = function getNonePlanIdForIntervalType(arg0) {
  const constants = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((arg0) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.skuId === closure_1_2.NONE;
    }
    if (tmp2) {
      tmp2 = tmp.interval === interval;
    }
    if (tmp2) {
      tmp2 = tmp.intervalCount === intervalCount;
    }
    return tmp2;
  });
  if (NONE_MONTH == null) {
    NONE_MONTH = constants.NONE_MONTH;
  }
  return NONE_MONTH;
};
export const getNonePlanIdForSubscription = function getNonePlanIdForSubscription(arg0) {
  let num = tmp2.intervalCount;
  num = undefined;
  const interval = tmp2.interval;
  if (num === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((arg0) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.skuId === closure_1_2.NONE;
    }
    if (tmp2) {
      tmp2 = tmp.interval === interval;
    }
    if (tmp2) {
      tmp2 = tmp.intervalCount === intervalCount;
    }
    return tmp2;
  });
  if (NONE_MONTH == null) {
    NONE_MONTH = interval.NONE_MONTH;
  }
  return NONE_MONTH;
};
export const getBaseSubscriptionItemForSubscriptionItems = function getBaseSubscriptionItemForSubscriptionItems(items) {
  return items.find((arg0) => null != intervalCount[arg0.planId] && null != intervalCount[arg0.planId].premiumType);
};
export const getBasePlanIdForSubscriptionItems = function getBasePlanIdForSubscriptionItems(items, interval, intervalCount) {
  const found = items.find((arg0) => null != intervalCount[arg0.planId] && null != intervalCount[arg0.planId].premiumType);
  if (null == found) {
    if (items.length > 0) {
      ({ interval, intervalCount } = intervalCount[items[0].planId]);
    }
    if (intervalCount === undefined) {
      intervalCount = 1;
    }
    const _Object = Object;
    const keys = Object.keys(intervalCount);
    let NONE_MONTH = keys.find((arg0) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.skuId === closure_1_2.NONE;
      }
      if (tmp2) {
        tmp2 = tmp.interval === interval;
      }
      if (tmp2) {
        tmp2 = tmp.intervalCount === intervalCount;
      }
      return tmp2;
    });
    if (NONE_MONTH == null) {
      NONE_MONTH = interval.NONE_MONTH;
    }
    return NONE_MONTH;
  } else {
    return found.planId;
  }
};