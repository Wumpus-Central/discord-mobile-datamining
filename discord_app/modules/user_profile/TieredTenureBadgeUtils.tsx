// === Module 7003: getTieredTenureBadgeData ===

// Module 7003 (getTieredTenureBadgeData)
import { TENURE_BADGES } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export const getTieredTenureBadgeData = function getTieredTenureBadgeData(tieredTenureBadge) {
  return TENURE_BADGES[tieredTenureBadge];
};
export const getTieredTenureBadge = function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != TENURE_BADGES[badgeId]) {
    tmp = badgeId;
  }
  return tmp;
};
export const getEarnedOnDate = function getEarnedOnDate(tieredTenureBadgeForUser, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else if (null == TENURE_BADGES[tieredTenureBadgeForUser]) {
    return null;
  } else {
    const obj = importDefault(3837)(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};