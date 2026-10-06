// === Module 7132: TieredTenureBadgeUtils ===

// Module 7132 (TieredTenureBadgeUtils)
import _modDef4467 from "module_4467" /* 4467 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ TENURE_BADGES: c2, TIERED_TENURE_BADGE_ORDER: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export const getTieredTenureBadgeData = function getTieredTenureBadgeData(tieredTenureBadge) {
  return React2[tieredTenureBadge];
};
export const getTieredTenureBadge = function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != React2[badgeId]) {
    tmp = badgeId;
  }
  return tmp;
};
export const getEarnedOnDate = function getEarnedOnDate(earnedTenureBadge, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else if (null == React2[earnedTenureBadge]) {
    return null;
  } else {
    const obj = _modDef4467(premiumSince);
    obj.add(React2[earnedTenureBadge].tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};
export const getEarnedTenureBadge = function getEarnedTenureBadge(premiumSince) {
  let tmp2;
  if (null == premiumSince) {
    return null;
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    let diff = length.length - 1;
    new Date();
    if (0 <= diff) {
      while (true) {
        tmp2 = length[diff];
        let toDateResult = null;
        if (null != premiumSince) {
          let tmp6 = React2[tmp2];
          toDateResult = null;
          if (null != tmp6) {
            let obj = _modDef4467(premiumSince);
            let addResult = obj.add(tmp6.tenureReqNumMonths, "months");
            let addResult1 = obj.add(1, "days");
            toDateResult = obj.toDate();
          }
        }
        if (null != toDateResult) {
          if (tmp15 >= toDateResult.getTime()) {
            break;
          }
        }
        diff = diff - 1;
      }
      return tmp2;
    }
    return null;
  }
};