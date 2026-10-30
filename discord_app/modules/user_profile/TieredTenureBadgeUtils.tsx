// === Module 7774: TieredTenureBadgeUtils ===

// Module 7774 (TieredTenureBadgeUtils)
import _modDef2044 from "module_2044" /* 2044 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import size from "module_2" /* 2 */;

({ TENURE_BADGES: c2, TIERED_TENURE_BADGE_ORDER: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export function getTieredTenureBadgeData(tieredTenureBadge) {
  return dependencyMap[tieredTenureBadge];
}
export function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != dependencyMap[badgeId]) {
    tmp = badgeId;
  }
  return tmp;
}
export function getEarnedOnDate(earnedTenureBadge, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else if (null == dependencyMap[earnedTenureBadge]) {
    return null;
  } else {
    const obj = _modDef2044(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
}
export function getEarnedTenureBadge(premiumSince) {
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
            let obj = _modDef2044(premiumSince);
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
}