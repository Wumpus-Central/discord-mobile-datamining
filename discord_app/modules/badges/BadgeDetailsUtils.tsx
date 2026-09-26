// === Module 10667: BadgeDetailsUtils ===

// Module 10667 (BadgeDetailsUtils)
import util from "util" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import BadgeId from "BadgeId" /* 7629 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import BadgeIdResolution from "BadgeIdResolution" /* 7638 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import size from "module_2" /* 2 */;

const getObtainedAtFromBadge = BadgeDirectoryStore.getObtainedAtFromBadge;
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/badges/BadgeDetailsUtils.tsx");

export const getBadgeArtUrls = function getBadgeArtUrls(badge, displayTier, stateFromStores) {
  let prop2;
  if (!stateFromStores) {
    let prop;
    if (displayTier != null) {
      prop = displayTier.complex_icon_animated_url;
    }
    if (prop == null) {
      prop = badge.complex_icon_animated_url;
    }
    prop2 = prop;
  }
  const obj = { animatedUrl: prop2, imageUrl: null };
  if (prop2 == null) {
    let prop1;
    if (displayTier != null) {
      prop1 = displayTier.complex_icon_static_url;
    }
    prop2 = prop1;
  }
  if (prop2 == null) {
    prop2 = badge.complex_icon_static_url;
  }
  if (prop2 == null) {
    let simple_icon_url;
    if (displayTier != null) {
      simple_icon_url = displayTier.simple_icon_url;
    }
    prop2 = simple_icon_url;
  }
  if (prop2 == null) {
    prop2 = badge.simple_icon_url;
  }
  obj.imageUrl = prop2;
  return obj;
};
export const getBadgeTitle = function getBadgeTitle(badge, displayTier) {
  const tmp3 = badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE;
  if (tmp3) {
    let name1;
    if (!tmp4) {
      name1 = displayTier.name;
    }
    if (name1 == null) {
      let key;
      if (displayTier != null) {
        key = displayTier.key;
      }
      name1 = key;
    }
    let name = name1;
  } else if (!tmp4) {
    name = displayTier.name;
  }
  if (tmp3) {
    const intl = util.intl;
    let name2 = intl.string(util.t.Ipxkog);
  } else {
    name2 = badge.name;
  }
  if (tmp3) {
    const obj2 = { isNitro: tmp3, eyebrow: "Array", displayName: -1 };
    let combined = name2;
    if (null != name) {
      const _HermesInternal = HermesInternal;
      combined = "" + name2 + " " + name;
    }
    obj2.displayName = combined;
    let obj = obj2;
  } else {
    if (null != name) {
      if (badge.owned) {
        const obj3 = { isNitro: tmp3, eyebrow: name2, displayName: name };
        obj = obj3;
      }
    }
    obj = { isNitro: tmp3, eyebrow: "Array", displayName: name2 };
  }
  return obj;
};
export const isLegacyDisplayBadge = function isLegacyDisplayBadge(badge) {
  let tmp3 = BadgeIdResolution.isLegacyBadgeId(badge.badge_id) && !badge.is_earnable;
  if (tmp3) {
    tmp3 = badge.badge_id !== BadgeId.BadgeId.STAFF;
  }
  return tmp3;
};
export const getBadgeStatusText = function getBadgeStatusText(badge, arg1) {
  const tmp = getObtainedAtFromBadge(badge);
  if (badge.owned) {
    let v5LcHT0 = dependencyMap;
    if (badge.badge_id === BadgeId.BadgeId.APRIL_FOOLS_2026) {
      const intl4 = util.intl;
      v5LcHT0 = util.t["5LcHT0"];
      let stringResult = intl4.string(v5LcHT0);
    } else {
      let tmp6 = BadgeIdResolution.isLegacyBadgeId(badge.badge_id) && !badge.is_earnable;
      if (tmp6) {
        tmp6 = badge.badge_id !== BadgeId.BadgeId.STAFF;
      }
      if (tmp6) {
        stringResult = arg1;
      }
      if (null == tmp) {
        const intl2 = util.intl;
        let stringResult1 = intl2.string(util.t.sTFApF);
      }
      const intl3 = util.intl;
      const obj = { date: null };
      const _Date = Date;
      const date = new Date(tmp);
      obj.date = date;
      stringResult1 = intl3.formatToPlainString(util.t.XmaiRQ, obj);
      const tmp4Result = BadgeIdResolution;
    }
  } else {
    const intl = util.intl;
    return intl.string(util.t.uHtDcT);
  }
};
export const isUpgradeableNitroViewer = function isUpgradeableNitroViewer(badge, stateFromStores1) {
  let tmp = badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE;
  if (tmp) {
    tmp = stateFromStores1 === PremiumTypes.TIER_0 || stateFromStores1 === PremiumTypes.TIER_1;
    const tmp3 = stateFromStores1 === PremiumTypes.TIER_0 || stateFromStores1 === PremiumTypes.TIER_1;
  }
  return tmp;
};
export const getBadgeDescriptionText = function getBadgeDescriptionText(arg0) {
  ({ viewerBadge, isViewerOnUpgradeableNitro, badge } = arg0);
  if (!isViewerOnUpgradeableNitro) {
    let owned;
    if (viewerBadge != null) {
      owned = viewerBadge.owned;
    }
    if (true === owned) {
      const tiers = viewerBadge.tiers;
      let num;
      if (tiers != null) {
        num = tiers.length;
      }
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        if (null == viewerBadge.next_tier) {
          const intl = util.intl;
          return intl.string(util.t.jY5xAL);
        }
      }
    }
  }
  if (isViewerOnUpgradeableNitro) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.qkwSSp);
  } else {
    stringResult = undefined;
    if (viewerBadge != null) {
      stringResult = viewerBadge.description;
    }
    if (stringResult == null) {
      stringResult = badge.description;
    }
  }
};
export const getBadgeCtaVariant = function getBadgeCtaVariant(isViewerOnUpgradeableNitro) {
  let str = "expressive";
  if (!isViewerOnUpgradeableNitro.isViewerOnUpgradeableNitro) {
    let str2 = "secondary";
    if (!tmp2) {
      let str3 = "primary";
      if (tmp) {
        str3 = "expressive";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
export const shouldShowLegacyUnavailableNotice = function shouldShowLegacyUnavailableNotice(arg0) {
  ({ badge, isViewingOtherUser, viewerOwnsBadge } = arg0);
  if (isViewingOtherUser) {
    isViewingOtherUser = !badge.is_earnable;
  }
  if (isViewingOtherUser) {
    isViewingOtherUser = !viewerOwnsBadge;
  }
  if (isViewingOtherUser) {
    isViewingOtherUser = badge.badge_id !== BadgeId.BadgeId.STAFF;
  }
  return isViewingOtherUser;
};
export const getBadgeProgressDisplay = function getBadgeProgressDisplay(badge, viewerBadge) {
  let tmp = viewerBadge;
  if (viewerBadge == null) {
    tmp = badge;
  }
  const findTierResult = BadgeUtils.findTier(tmp, tmp.current_tier);
  const findTierResult1 = BadgeUtils.findTier(tmp, tmp.next_tier);
  const progress = tmp.progress;
  let first;
  if (progress != null) {
    first = progress[0];
  }
  const obj3 = { progress: first, threshold: null, currentArtUrl: null, nextArtUrl: null, helperText: null };
  let threshold;
  if (first != null) {
    threshold = first.threshold;
  }
  if (threshold == null) {
    let threshold1;
    if (findTierResult1 != null) {
      const first1 = findTierResult1.requirements[0];
      if (first1 != null) {
        threshold1 = first1.threshold;
      }
    }
    threshold = threshold1;
  }
  if (threshold == null) {
    threshold = null;
  }
  obj3.threshold = threshold;
  let prop;
  if (findTierResult != null) {
    prop = findTierResult.complex_icon_static_url;
  }
  if (prop == null) {
    let simple_icon_url;
    if (findTierResult != null) {
      simple_icon_url = findTierResult.simple_icon_url;
    }
    prop = simple_icon_url;
  }
  obj3.currentArtUrl = prop;
  let prop1;
  if (findTierResult1 != null) {
    prop1 = findTierResult1.complex_icon_static_url;
  }
  if (prop1 == null) {
    let simple_icon_url1;
    if (findTierResult1 != null) {
      simple_icon_url1 = findTierResult1.simple_icon_url;
    }
    prop1 = simple_icon_url1;
  }
  obj3.nextArtUrl = prop1;
  let progress_helper_text;
  if (first != null) {
    progress_helper_text = first.progress_helper_text;
  }
  let tmp15;
  if (!tmp2Result.isNullOrEmpty(progress_helper_text)) {
    let progress_helper_text1;
    if (first != null) {
      progress_helper_text1 = first.progress_helper_text;
    }
    tmp15 = progress_helper_text1;
  }
  obj3.helperText = tmp15;
  return obj3;
};