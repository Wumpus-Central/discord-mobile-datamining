// === Module 7634: getTieredTenureBadgeData ===

// Module 7634 (getTieredTenureBadgeData)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4153 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

({ TENURE_BADGES: obj1, TIERED_TENURE_BADGE_ORDER: c3 } = GuildFeatures);
const result = set.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

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
    const obj = hooksDefault(premiumSince);
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
        let tmp = length;
        let tmp3 = diff;
        let toDateResult = null;
        if (null != premiumSince) {
          let tmp5 = dependencyMap;
          let tmp6 = dependencyMap[length[diff]];
          toDateResult = null;
          if (null != tmp6) {
            let tmp7 = importDefault;
            let tmp8 = dependencyMap;
            let obj = hooksDefault(premiumSince);
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