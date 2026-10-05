// === Module 10897: BadgeDetailsUtils ===

// Module 10897 (BadgeDetailsUtils)
import intl5 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import StringUtils from "StringUtils" /* 2018 */;
import BadgeId from "BadgeId" /* 7855 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import BadgeIdResolution from "BadgeIdResolution" /* 7864 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
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
  const obj = { animatedUrl: prop2, imageUrl: prop2 };
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
  return obj;
};
export const getBadgeTitle = function getBadgeTitle(badge, displayTier) {
  let combined;
  let name;
  let name2;
  let obj;
  const tmp3 = badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE;
  if (tmp3) {
    let name1;
    if (displayTier != null) {
      name1 = displayTier.name;
    }
    if (name1 == null) {
      let key;
      if (displayTier != null) {
        key = displayTier.key;
      }
      name1 = key;
    }
    name = name1;
  } else if (displayTier != null) {
    name = displayTier.name;
  }
  if (tmp3) {
    const intl = intl5.intl;
    name2 = intl.string(intl5.t.Ipxkog);
  } else {
    name2 = badge.name;
  }
  if (tmp3) {
    const obj2 = { isNitro: tmp3, eyebrow: "Array", displayName: combined };
    combined = name2;
    if (null != name) {
      const _HermesInternal = HermesInternal;
      combined = "" + name2 + " " + name;
    }
    obj = obj2;
  } else {
    if (null != name) {
      if (badge.owned) {
        obj = { isNitro: tmp3, eyebrow: name2, displayName: name };
        const obj3 = { isNitro: tmp3, eyebrow: name2, displayName: name };
      }
    }
    obj = { isNitro: tmp3, eyebrow: "Array", displayName: name2 };
  }
  return obj;
};
export const isLegacyDisplayBadge = function isLegacyDisplayBadge(badge) {
  const obj = BadgeIdResolution;
  const tmp3 = obj.isLegacyBadgeId(badge.badge_id) && !badge.is_earnable && badge.badge_id !== BadgeId.BadgeId.STAFF;
  return tmp3;
};
export const getBadgeStatusText = function getBadgeStatusText(badge, arg1) {
  let date;
  let stringResult1;
  const tmp = getObtainedAtFromBadge(badge);
  if (badge.owned) {
    let stringResult;
    if (badge.badge_id === BadgeId.BadgeId.APRIL_FOOLS_2026) {
      const intl4 = intl5.intl;
      stringResult = intl4.string(intl5.t["5LcHT0"]);
    } else {
      const tmp5Result = BadgeIdResolution;
      const tmp7 = tmp5Result.isLegacyBadgeId(badge.badge_id) && !badge.is_earnable && badge.badge_id !== BadgeId.BadgeId.STAFF;
      if (!tmp7) {
        if (null != tmp) {
          let formatToPlainStringResult;
          if (badge.badge_id !== BadgeId.BadgeId.STAFF) {
            const intl3 = intl5.intl;
            const formatToPlainString = intl3.formatToPlainString;
            const _Date = Date;
            const self = this;
            const self2 = this;
            const obj = { date };
            const XmaiRQ = intl5.t.XmaiRQ;
            date = new Date(tmp);
            formatToPlainStringResult = formatToPlainString(XmaiRQ, obj);
          }
          stringResult = formatToPlainStringResult;
        }
        const intl2 = intl5.intl;
        formatToPlainStringResult = intl2.string(intl5.t.sTFApF);
      } else {
        stringResult = arg1;
      }
    }
    stringResult1 = stringResult;
  } else {
    const intl = intl5.intl;
    stringResult1 = intl.string(intl5.t.uHtDcT);
  }
  return stringResult1;
};
export const isUpgradeableNitroViewer = function isUpgradeableNitroViewer(badge, stateFromStores1) {
  let tmp = badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE;
  if (tmp) {
    tmp = stateFromStores1 === PremiumTypes.TIER_0 || stateFromStores1 === PremiumTypes.TIER_1;
  }
  return tmp;
};
export const getBadgeDescriptionText = function getBadgeDescriptionText(arg0) {
  let badge;
  let isViewerOnUpgradeableNitro;
  let stringResult1;
  let viewerBadge;
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
        let stringResult;
        if (null == viewerBadge.next_tier) {
          const intl = intl5.intl;
          stringResult = intl.string(intl5.t.jY5xAL);
        }
        return stringResult;
      }
    }
  }
  if (isViewerOnUpgradeableNitro) {
    const intl2 = intl5.intl;
    stringResult1 = intl2.string(intl5.t.qkwSSp);
  } else {
    stringResult1 = undefined;
    if (viewerBadge != null) {
      stringResult1 = viewerBadge.description;
    }
    if (stringResult1 == null) {
      stringResult1 = badge.description;
    }
  }
  stringResult = stringResult1;
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
  let badge;
  let isViewingOtherUser;
  let viewerOwnsBadge;
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
  let simple_icon_url;
  let simple_icon_url1;
  let threshold;
  let tmp16;
  let tmp = viewerBadge;
  if (viewerBadge == null) {
    tmp = badge;
  }
  const obj = BadgeUtils;
  const findTierResult = obj.findTier(tmp, tmp.current_tier);
  const obj2 = BadgeUtils;
  const findTierResult1 = obj2.findTier(tmp, tmp.next_tier);
  const progress = tmp.progress;
  let first;
  if (progress != null) {
    first = progress[0];
  }
  const obj3 = { progress: first, threshold, currentArtUrl: simple_icon_url, nextArtUrl: simple_icon_url1, helperText: tmp16 };
  threshold = undefined;
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
  simple_icon_url = undefined;
  if (findTierResult != null) {
    simple_icon_url = findTierResult.simple_icon_url;
  }
  if (simple_icon_url == null) {
    let prop;
    if (findTierResult != null) {
      prop = findTierResult.complex_icon_static_url;
    }
    simple_icon_url = prop;
  }
  simple_icon_url1 = undefined;
  if (findTierResult1 != null) {
    simple_icon_url1 = findTierResult1.simple_icon_url;
  }
  if (simple_icon_url1 == null) {
    let prop1;
    if (findTierResult1 != null) {
      prop1 = findTierResult1.complex_icon_static_url;
    }
    simple_icon_url1 = prop1;
  }
  let progress_helper_text;
  const isNullOrEmpty = StringUtils.isNullOrEmpty;
  StringUtils;
  if (first != null) {
    progress_helper_text = first.progress_helper_text;
  }
  tmp16 = undefined;
  if (!isNullOrEmpty(progress_helper_text)) {
    let progress_helper_text1;
    if (first != null) {
      progress_helper_text1 = first.progress_helper_text;
    }
    tmp16 = progress_helper_text1;
  }
  return obj3;
};