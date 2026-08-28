// === Module 13163: getGiftingBadgeProgressPercent ===

// Module 13163 (getGiftingBadgeProgressPercent)
import set from "set" /* 2 */;
import initialize from "initialize" /* 8506 */;
import apexExperiment from "apexExperiment" /* 10454 */;
import apexExperiment2 from "apexExperiment" /* 13164 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;

let closure_2 = initialize.getSingleRequirementThreshold;
let result = set.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = callback(currentTier);
  const tmp2 = callback(nextTier);
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
  const GiftingBadgeExperiment = apexExperiment.GiftingBadgeExperiment;
  let obj = { location };
  const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
  const GiftingBadgeDesktopExperiment = apexExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  obj = { location: "" + location + str };
  return GiftingBadgeDesktopExperiment.useConfig(obj).enabled && enabled;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = apexExperiment.GiftingBadgeExperiment;
  let obj = { location };
  let enabled = GiftingBadgeExperiment.getConfig(obj).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = apexExperiment2.GiftingBadgeDesktopExperiment;
    obj = { location: null };
    obj[0] = location;
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useIsEligibleToShowGiftingBadgeCoachmark = function useIsEligibleToShowGiftingBadgeCoachmark(location) {
  const _location = location.location;
  const GiftingBadgeExperiment = apexExperiment.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = apexExperiment2.GiftingBadgeDesktopExperiment;
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
  let tmpResult = tmp(589);
  const items = [closure_3];
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
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
  tmpResult = tmp(4267);
  const result = tmpResult.useIsDismissibleContentDismissed_UNSAFE(tmp(1377).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp4) {
    tmp4 = stateFromStores;
  }
  if (tmp4) {
    tmp4 = !result;
  }
  return tmp4;
};