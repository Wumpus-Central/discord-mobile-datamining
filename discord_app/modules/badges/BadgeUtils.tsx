// === Module 9671: getProfileBadgeIconUrl ===

// Module 9671 (getProfileBadgeIconUrl)
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY" /* 8932 */;
import BadgeId from "BadgeId" /* 8933 */;
import set2 from "set" /* 8938 */;
import set from "set" /* 2 */;

function getProfileBadgeIconUrl(iconSrc) {
  iconSrc = iconSrc.iconSrc;
  if (iconSrc == null) {
    iconSrc = getBadgeAssetFromCDN(iconSrc.icon);
  }
  return iconSrc;
}
const getBadgeAssetFromCDN = USER_PROFILE_TOOLTIP_DELAY.getBadgeAssetFromCDN;
let items = [BadgeId.BadgeId.STAFF];
let set = new Set(items);
let result = set.fileFinishedImporting("modules/badges/BadgeUtils.tsx");

export const NON_CUSTOMIZABLE_BADGE_IDS = set;
export const MAX_DISPLAYED_PROFILE_BADGES = 6;
export const getUnhideableBadgeIds = function getUnhideableBadgeIds(tenureBadgeHideable) {
  if (!tenureBadgeHideable.tenureBadgeHideable) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(set, 0)] = BadgeId.BadgeId.PREMIUM_TENURE;
    set = new Set(items);
    const arraySpreadResult = HermesBuiltin.arraySpread(set, 0);
  }
  return set;
};
export const getHideableBadges = function getHideableBadges(memo, unhideableBadgeIds) {
  closure_0 = unhideableBadgeIds;
  const found = memo.filter((owned) => {
    owned = owned.owned;
    if (owned) {
      owned = !unhideableBadgeIds.has(owned.badge_id);
    }
    return owned;
  });
  return found.sort((hidden, hidden2) => {
    let flag = hidden.hidden;
    if (flag == null) {
      flag = false;
    }
    let flag2 = hidden2.hidden;
    if (flag2 == null) {
      flag2 = false;
    }
    return Number(flag) - Number(flag2);
  });
};
export { getProfileBadgeIconUrl };
export const getLegacyIconUrlByBadgeId = function getLegacyIconUrlByBadgeId(badges) {
  const map = new Map();
  const iter = badges[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tmp2 = nextResult;
    let obj2 = set2;
    let profileBadgeId = obj2.resolveProfileBadgeId(nextResult.id);
    let tmp6 = profileBadgeId;
    let hasItem = null == profileBadgeId;
    if (!hasItem) {
      let tmp8 = profileBadgeId;
      hasItem = map.has(tmp6);
    }
    if (!hasItem) {
      let tmp9 = profileBadgeId;
      let tmp10 = getProfileBadgeIconUrl;
      let tmp11 = nextResult;
      let result = map.set(tmp6, getProfileBadgeIconUrl(tmp2));
    }
    continue;
  }
  return map;
};