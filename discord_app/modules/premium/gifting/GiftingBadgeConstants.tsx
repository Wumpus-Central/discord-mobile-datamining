// === Module 9839: getTierForProgress ===

// Module 9839 (getTierForProgress)
import { getSingleRequirementThreshold as closure_0 } from "map";

const result = require("set").fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp3 = callback(arg1);
    let tmp4 = arg0;
    if (callback >= tmp3) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getNextTierForProgress = function getNextTierForProgress(arr) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp3 = callback(arg1);
    let tmp4 = arg0;
    if (callback < tmp3) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getRemainingGiftsToNextTier = function getRemainingGiftsToNextTier(arr) {
  const callback = arg1;
  const reduced = arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp3 = callback(arg1);
    let tmp4 = arg0;
    if (callback < tmp3) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
  let diff = null;
  if (null != reduced) {
    diff = callback(reduced) - arg1;
  }
  return diff;
};