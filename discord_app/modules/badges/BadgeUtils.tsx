// discord_app/modules/badges/BadgeUtils.tsx
import set from "../../../_runtime/00002_set.js";
import USER_PROFILE_TOOLTIP_DELAY from "../user_profile/Constants.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import set2 from "BadgeIdResolution.tsx";

function isPinnedBadge(badge_id) {
  return badge_id === BadgeId.BadgeId.STAFF;
}
function getProfileBadgeIconUrl(iconSrc) {
  iconSrc = iconSrc.iconSrc;
  if (iconSrc == null) {
    iconSrc = getBadgeAssetFromCDN(iconSrc.icon);
  }
  return iconSrc;
}
const getBadgeAssetFromCDN = USER_PROFILE_TOOLTIP_DELAY.getBadgeAssetFromCDN;
let result = set.fileFinishedImporting("modules/badges/BadgeUtils.tsx");

export const MAX_DISPLAYED_PROFILE_BADGES = 6;
export { isPinnedBadge };
export const getUnhideableBadgeIds = function getUnhideableBadgeIds(tenureBadgeHideable) {
  let _Set = Set;
  const STAFF = BadgeId.BadgeId.STAFF;
  if (tenureBadgeHideable.tenureBadgeHideable) {
    const items = [STAFF];
    _Set = new _Set(items);
  } else {
    const items1 = [STAFF, BadgeId.BadgeId.PREMIUM_TENURE];
    _Set = new _Set(items1);
  }
  return _Set;
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
      let tmp3 = isPinnedBadge;
      let tmp4 = nextResult;
      if (isPinnedBadge(tmp2.badge_id)) {
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