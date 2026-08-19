// discord_app/modules/premium/PremiumSubscription.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import GuildFeatures from "PremiumConstants.tsx";

({ SubscriptionPlans: c0, SubscriptionPlanInfo: closure_1, PremiumSubscriptionSKUs: obj1 } = GuildFeatures);
const result = obj132.fileFinishedImporting("modules/premium/PremiumSubscription.tsx");

export const getNonePlanIdForIntervalType = function getNonePlanIdForIntervalType(arg0) {
  const constants = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((item, index) => {
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
  let num;
  const interval = tmp2.interval;
  if (num === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((item, index) => {
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
  return items.find((item, index) => null != intervalCount[item.planId] && null != intervalCount[item.planId].premiumType);
};
export const getBasePlanIdForSubscriptionItems = function getBasePlanIdForSubscriptionItems(items, interval, intervalCount) {
  const found = items.find((item, index) => null != intervalCount[item.planId] && null != intervalCount[item.planId].premiumType);
  if (null == found) {
    if (items.length > 0) {
      ({ interval, intervalCount } = intervalCount[items[0].planId]);
    }
    if (intervalCount === undefined) {
      intervalCount = 1;
    }
    const _Object = Object;
    const keys = Object.keys(intervalCount);
    let NONE_MONTH = keys.find((item, index) => {
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