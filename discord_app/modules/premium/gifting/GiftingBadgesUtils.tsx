// === Module 13658: GiftingBadgesUtils ===

// Module 13658 (GiftingBadgesUtils)
import initialize from "initialize" /* 504 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4457 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8309 */;
import GiftingBadgeExperiment2 from "GiftingBadgeExperiment" /* 10872 */;
import GiftingBadgeDesktopExperiment2 from "GiftingBadgeDesktopExperiment" /* 13659 */;
import GiftingBadgeComplexArtExperiment2 from "GiftingBadgeComplexArtExperiment" /* 13660 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

let closure_2 = BadgeDirectoryStore.getSingleRequirementThreshold;
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = closure_2(currentTier);
  const tmp2 = closure_2(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = badgeProgress / tmp2 * 100;
    }
    let num3 = num6;
  } else {
    num3 = 100;
    if (tmp > 0) {
      const _Math = Math;
      num3 = Math.min(tmp, badgeProgress) / tmp * 100;
    }
  }
  return Math.min(Math.max(num3, 0), 100);
};
export const useIsGiftingBadgesDesktopEnabled = function useIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location }).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const obj = { location };
  const obj2 = { location: "" + location + str };
  return GiftingBadgeDesktopExperiment.useConfig({ location: "" + location + str }).enabled && enabled;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.getConfig({ location }).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
    const obj2 = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj2).enabled;
  }
  return enabled;
};
export const useIsGiftingBadgeComplexArtEnabled = function useIsGiftingBadgeComplexArtEnabled(location) {
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig({ location }).enabled;
};
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(complex_icon_static_url, arg1) {
  if (arg1) {
    let prop;
    if (!tmp) {
      prop = complex_icon_static_url.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (complex_icon_static_url != null) {
        simple_icon_url1 = complex_icon_static_url.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    let simple_icon_url = prop;
  } else if (!tmp) {
    simple_icon_url = complex_icon_static_url.simple_icon_url;
  }
  return simple_icon_url;
};
export const useIsEligibleToShowGiftingBadgeCoachmark = function useIsEligibleToShowGiftingBadgeCoachmark(location) {
  const _location = location.location;
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if ("web" === location.platform) {
    str = "";
  }
  let enabled2 = GiftingBadgeDesktopExperiment.useConfig({ location: "" + _location + str }).enabled;
  let tmp4 = enabled;
  if ("web" === location.platform) {
    if (enabled2) {
      enabled2 = enabled;
    }
    tmp4 = enabled2;
  }
  const obj = { location: "" + _location + str };
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.hasHadPremium();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const tmpResult = initialize;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp4) {
    tmp4 = stateFromStores;
  }
  if (tmp4) {
    tmp4 = !result;
  }
  return tmp4;
};