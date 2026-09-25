// === Module 10648: BadgeUtils ===

// Module 10648 (BadgeUtils)
import util from "util" /* 1115 */;
import StringUtils from "StringUtils" /* 2010 */;
import Constants from "Constants" /* 7621 */;
import BadgeId from "BadgeId" /* 7622 */;
import BadgeIdResolution from "BadgeIdResolution" /* 7631 */;
import size from "module_2" /* 2 */;

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
let items = [BadgeId.BadgeId.GAME_VARIETY, BadgeId.BadgeId.GAME_TIME, BadgeId.BadgeId.STREAMING];
const set = new Set(items);
let items1 = [BadgeId.BadgeId.ACCOUNT_AGE, BadgeId.BadgeId.STREAMING, BadgeId.BadgeId.GAME_TIME, BadgeId.BadgeId.GAME_VARIETY];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/badges/BadgeUtils.tsx");

export const MAX_DISPLAYED_PROFILE_BADGES = 6;
export { isPinnedBadge };
export const isPersonalizationGatedBadge = function isPersonalizationGatedBadge(badge_id) {
  return set.has(badge_id);
};
export const BETA_BADGE_IDS = set1;
export const isBetaBadgeId = function isBetaBadgeId(badge_id) {
  return set1.has(badge_id);
};
export const getDisplayTier = function getDisplayTier(badge) {
  const tiers = badge.tiers;
  if (null != tiers) {
    if (0 !== tiers.length) {
      const tmp = badge.owned ? badge.current_tier : badge.next_tier;
      closure_0 = tmp;
      let found;
      if (null != tmp) {
        found = tiers.find((key) => key.key === closure_0);
      }
      if (found == null) {
        found = tiers[0];
      }
      return found;
    }
  }
};
export const getAlwaysVisibleCopy = function getAlwaysVisibleCopy(badge_id) {
  if (badge_id === BadgeId.BadgeId.STAFF) {
    let nPQVxb = util.t.t3udZb;
  } else {
    nPQVxb = util.t.nPQVxb;
  }
  return nPQVxb;
};
export const getDirectoryBadges = function getDirectoryBadges(stateFromStoresArray) {
  const earnable = [];
  const owned = [];
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.owned) {
      let arr = owned.push(tmp2);
    } else if (tmp2.is_earnable) {
      let arr2 = earnable.push(tmp2);
    }
    continue;
  }
  return { earnable, owned };
};
export const getUnhideableBadgeIds = function getUnhideableBadgeIds(tenureBadgeHideable) {
  const _Set = Set;
  const STAFF = BadgeId.BadgeId.STAFF;
  if (tenureBadgeHideable.tenureBadgeHideable) {
    const items = [STAFF];
    let _Set1 = new _Set(items);
  } else {
    const items1 = [STAFF, BadgeId.BadgeId.PREMIUM_TENURE];
    _Set1 = new _Set(items1);
  }
  return _Set1;
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
        let arr2 = hiddenBadges.push(tmp2);
      } else {
        let arr3 = reorderableBadges.push(tmp2);
      }
    }
    continue;
  }
  return { fixedBadges, reorderableBadges, hiddenBadges };
};
export { getProfileBadgeIconUrl };
export const getProfileBadgeLabel = function getProfileBadgeLabel(description, info_label) {
  if (info_label != null) {
    info_label = info_label.info_label;
  }
  if (null != info_label) {
    if (!obj.isLegacyBadgeId(info_label.badge_id)) {
      StringUtils;
    }
    return info_label;
  }
  let str = description;
  if (description == null) {
    let name;
    if (info_label != null) {
      name = info_label.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  info_label = str;
};
export const getLegacyDescriptionByBadgeId = function getLegacyDescriptionByBadgeId(badges) {
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
      let result = map.set(tmp6, tmp2.description);
    }
    continue;
  }
  return map;
};
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
export const findTier = function findTier(viewerBadge, next_tier) {
  closure_0 = next_tier;
  let found;
  if (null != next_tier) {
    const tiers = viewerBadge.tiers;
    found = tiers.find((key) => key.key === closure_0);
  }
  return found;
};
export const getTierRowSubtitle = function getTierRowSubtitle(isUnlocked) {
  if (!isUnlocked.isUnlocked) {
    if (isUnlocked.isViewerOnUpgradeableNitro) {
      if (!isUnlocked.isViewingOtherUser) {
        const intl = util.intl;
        let stringResult = intl.string(util.t.VPu695);
      }
      return stringResult;
    }
  }
  let str = isUnlocked.tier.milestone_text;
  if (str == null) {
    str = "";
  }
  stringResult = str;
};