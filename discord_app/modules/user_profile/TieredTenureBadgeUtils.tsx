// discord_app/modules/user_profile/TieredTenureBadgeUtils.tsx
import set from "../../../_runtime/00002_set.js";
import GuildFeatures from "../premium/PremiumConstants.tsx";
import tDefault from "../../../_runtime/03975_t.js";

const TENURE_BADGES = GuildFeatures.TENURE_BADGES;
const result = set.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

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
    const obj = tDefault(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};