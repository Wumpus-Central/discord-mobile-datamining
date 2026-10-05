// discord_app/modules/badges/BadgeUtils.tsx
import intl2 from "../../intl/index.native.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import Constants from "../user_profile/Constants.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeIdResolution from "BadgeIdResolution.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map;

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
let items1 = [
  BadgeId.BadgeId.ACCOUNT_AGE,
  BadgeId.BadgeId.STREAMING,
  BadgeId.BadgeId.GAME_TIME,
  BadgeId.BadgeId.GAME_VARIETY,
];
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
      let closure_0 = tmp;
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
  let nPQVxb;
  if (badge_id === BadgeId.BadgeId.STAFF) {
    nPQVxb = intl2.t.t3udZb;
  } else {
    nPQVxb = intl2.t.nPQVxb;
  }
  return nPQVxb;
};
export const getDirectoryBadges = function getDirectoryBadges(badges) {
  const earnable = [];
  const owned = [];
  const iter = badges[Symbol.iterator]();
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
  let _Set1;
  const _Set = Set;
  tenureBadgeHideable = tenureBadgeHideable.tenureBadgeHideable;
  const STAFF = BadgeId.BadgeId.STAFF;
  if (tenureBadgeHideable) {
    const items = [STAFF];
    const self3 = this;
    const self4 = this;
    _Set1 = new _Set(items);
  } else {
    const items1 = [STAFF, BadgeId.BadgeId.PREMIUM_TENURE];
    const self = this;
    const self2 = this;
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
    const obj = BadgeIdResolution;
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
  map = new Map();
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
  map = new Map();
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
  let closure_0 = next_tier;
  let found;
  if (null != next_tier) {
    const tiers = viewerBadge.tiers;
    found = tiers.find((key) => key.key === next_tier);
  }
  return found;
};
export const getTierRowSubtitle = function getTierRowSubtitle(tier) {
  tier = tier.tier;
  if (!tier.isUnlocked) {
    if (tier.isViewerOnUpgradeableNitro) {
      let stringResult;
      if (!tier.isViewingOtherUser) {
        const intl = intl2.intl;
        stringResult = intl.string(intl2.t.VPu695);
      }
      return stringResult;
    }
  }
  let str = tier.milestone_text;
  if (str == null) {
    str = "";
  }
  stringResult = str;
};
