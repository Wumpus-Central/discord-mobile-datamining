// discord_app/modules/premium/PremiumSubscription.tsx
import PremiumConstants from "PremiumConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let constants;

let _window;
let c2;
let map;
({ SubscriptionPlans: _window, SubscriptionPlanInfo: map, PremiumSubscriptionSKUs: c2 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscription.tsx");

export const getNonePlanIdForIntervalType = function getNonePlanIdForIntervalType(arg0) {
  let closure_0;
  constants = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find(
    (item) =>
      null != tmp && tmp.skuId === constants.NONE && tmp.interval === interval && tmp.intervalCount === intervalCount,
  );
  if (NONE_MONTH == null) {
    NONE_MONTH = constants.NONE_MONTH;
  }
  return NONE_MONTH;
};
export const getNonePlanIdForSubscription = function getNonePlanIdForSubscription(arg0) {
  let num;
  const interval = tmp2.interval;
  const tmp = num;
  if (num === undefined) {
    num = 1;
  }
  const keys = Object.keys(tmp);
  let NONE_MONTH = keys.find(
    (item) =>
      null != tmp && tmp.skuId === constants.NONE && tmp.interval === interval && tmp.intervalCount === intervalCount,
  );
  if (NONE_MONTH == null) {
    NONE_MONTH = interval.NONE_MONTH;
  }
  return NONE_MONTH;
};
export const getBaseSubscriptionItemForSubscriptionItems = function getBaseSubscriptionItemForSubscriptionItems(items) {
  return items.find((item) => null != intervalCount[item.planId] && null != intervalCount[item.planId].premiumType);
};
export const getBasePlanIdForSubscriptionItems = function getBasePlanIdForSubscriptionItems(
  items,
  interval,
  intervalCount,
) {
  const found = items.find(
    (item) => null != intervalCount[item.planId] && null != intervalCount[item.planId].premiumType,
  );
  if (null == found) {
    if (items.length > 0) {
      ({ interval, intervalCount } = intervalCount[items[0].planId]);
    }
    if (intervalCount === undefined) {
      intervalCount = 1;
    }
    const _Object = Object;
    const keys = Object.keys(intervalCount);
    let NONE_MONTH = keys.find(
      (item) =>
        null != tmp && tmp.skuId === constants.NONE && tmp.interval === interval && tmp.intervalCount === intervalCount,
    );
    if (NONE_MONTH == null) {
      NONE_MONTH = interval.NONE_MONTH;
    }
    return NONE_MONTH;
  } else {
    return found.planId;
  }
};
