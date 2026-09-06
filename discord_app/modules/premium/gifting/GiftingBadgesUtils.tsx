// discord_app/modules/premium/gifting/GiftingBadgesUtils.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import GiftingBadgeExperiment2 from "experiments/GiftingBadgeExperiment.tsx";
import GiftingBadgeDesktopExperiment2 from "experiments/GiftingBadgeDesktopExperiment.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = BadgeDirectoryStore.getSingleRequirementThreshold;
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(
  badgeProgress,
  currentTier,
  nextTier,
) {
  const tmp = closure_2(currentTier);
  const tmp2 = closure_2(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = (badgeProgress / tmp2) * 100;
    }
    let num3 = num6;
  } else {
    num3 = 100;
    if (tmp > 0) {
      const _Math = Math;
      num3 = (Math.min(tmp, badgeProgress) / tmp) * 100;
    }
  }
  return Math.min(Math.max(num3, 0), 100);
};
export const useIsGiftingBadgesDesktopEnabled = function useIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  let obj = { location };
  const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  obj = { location: "" + location + str };
  return GiftingBadgeDesktopExperiment.useConfig(obj).enabled && enabled;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  let obj = { location };
  let enabled = GiftingBadgeExperiment.getConfig(obj).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
    obj = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj).enabled;
  }
  return enabled;
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
  let tmpResult = initialize;
  const items = [UserStore];
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
  tmpResult = DismissibleContentUnsafeUtils;
  const result = tmpResult.useIsDismissibleContentDismissed_UNSAFE(
    dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  );
  if (tmp4) {
    tmp4 = stateFromStores;
  }
  if (tmp4) {
    tmp4 = !result;
  }
  return tmp4;
};
