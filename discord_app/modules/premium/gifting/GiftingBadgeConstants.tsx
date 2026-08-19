// === Module 10420: getTierForProgress ===

// Module 10420 (getTierForProgress)
import obj132 from "obj132" /* 2 */;
import initialize from "initialize" /* 8936 */;

let closure_0 = initialize.getSingleRequirementThreshold;
const result = obj132.fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr) {
  closure_0 = arg1;
  return arr.reduce((acc, item, index) => {
    let tmp = acc;
    let tmp4 = acc;
    if (callback >= tmp3) {
      if (null == tmp) {
        tmp = item;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getNextTierForProgress = function getNextTierForProgress(arr) {
  closure_0 = arg1;
  return arr.reduce((acc, item, index) => {
    let tmp = acc;
    let tmp4 = acc;
    if (callback < tmp3) {
      if (null == tmp) {
        tmp = item;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getRemainingGiftsToNextTier = function getRemainingGiftsToNextTier(arr) {
  const callback = arg1;
  const reduced = arr.reduce((acc, item, index) => {
    let tmp = acc;
    let tmp4 = acc;
    if (callback < tmp3) {
      if (null == tmp) {
        tmp = item;
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