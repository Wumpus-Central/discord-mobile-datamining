// === Module 7634: TieredTenureBadgeUtils ===

// Module 7634 (TieredTenureBadgeUtils)
import _modDef4153 from "module_4153" /* 4153 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

({ TENURE_BADGES: c2, TIERED_TENURE_BADGE_ORDER: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export const getTieredTenureBadgeData = function getTieredTenureBadgeData(tieredTenureBadge) {
  return dependencyMap[tieredTenureBadge];
};
export const getTieredTenureBadge = function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != dependencyMap[badgeId]) {
    tmp = badgeId;
  }
  return tmp;
};
export const getEarnedOnDate = function getEarnedOnDate(earnedTenureBadge, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else if (null == dependencyMap[earnedTenureBadge]) {
    return null;
  } else {
    const obj = _modDef4153(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};
export const getEarnedTenureBadge = function getEarnedTenureBadge(premiumSince) {
  if (null == premiumSince) {
    return null;
  } else {
    const _Date = Date;
    let diff = length.length - 1;
    if (0 <= diff) {
      while (true) {
        let toDateResult = null;
        if (null != premiumSince) {
          let tmp6 = dependencyMap[length[diff]];
          toDateResult = null;
          if (null != tmp6) {
            let obj = _modDef4153(premiumSince);
            let addResult = obj.add(tmp6.tenureReqNumMonths, "months");
            let addResult1 = obj.add(1, "days");
            toDateResult = obj.toDate();
          }
        }
        if (null != toDateResult) {
          if (tmp17 >= toDateResult.getTime()) {
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