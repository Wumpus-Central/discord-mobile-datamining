// discord_app/modules/badges/BadgeUtils.tsx
import Constants from "../user_profile/Constants.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeIdResolution from "BadgeIdResolution.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const getBadgeAssetFromCDN = Constants.getBadgeAssetFromCDN;
let result = size.fileFinishedImporting("modules/badges/BadgeUtils.tsx");

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
      if (isPinnedBadge(tmp2.badge_id)) {
        let arr = fixedBadges.push(tmp2);
      } else if (tmp2.hidden) {
        arr = hiddenBadges.push(tmp2);
      } else {
        let arr1 = reorderableBadges.push(tmp2);
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
    let tmp2 = nextResult;
    let obj2 = BadgeIdResolution;
    let profileBadgeId = obj2.resolveProfileBadgeId(nextResult.id);
    let tmp6 = profileBadgeId;
    let hasItem = null == profileBadgeId;
    if (!hasItem) {
      hasItem = map.has(tmp6);
    }
    if (!hasItem) {
      let result = map.set(tmp6, getProfileBadgeIconUrl(tmp2));
    }
    continue;
  }
  return map;
};
