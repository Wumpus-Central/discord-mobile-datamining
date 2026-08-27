// === Module 8927: getProfileBadgeIconUrl ===

// Module 8927 (getProfileBadgeIconUrl)
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY" /* 8488 */;
import BadgeId from "BadgeId" /* 8489 */;
import set2 from "set" /* 8493 */;
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
export const groupCustomizableBadges = function groupCustomizableBadges(memo) {
  const fixedBadges = [];
  const reorderableBadges = [];
  const hiddenBadges = [];
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.owned) {
      let tmp3 = set;
      let tmp4 = nextResult;
      if (set.has(tmp2.badge_id)) {
        let tmp10 = nextResult;
        let arr = fixedBadges.push(tmp2);
      } else {
        let tmp5 = nextResult;
        if (tmp2.hidden) {
          let tmp8 = nextResult;
          arr = hiddenBadges.push(tmp2);
        } else {
          let tmp6 = nextResult;
          let arr1 = reorderableBadges.push(tmp2);
        }
      }
    }
    continue;
  }
  return { fixedBadges, reorderableBadges, hiddenBadges };
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