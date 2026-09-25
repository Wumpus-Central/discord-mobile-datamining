// discord_app/modules/premium/gifting/GiftingBadgesUtils.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2582 from "GiftingBadge.messages.js";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import GiftingBadgeExperiment2 from "experiments/GiftingBadgeExperiment.tsx";
import GiftingBadgeDesktopExperiment2 from "experiments/GiftingBadgeDesktopExperiment.tsx";
import GiftingBadgeComplexArtExperiment2 from "experiments/GiftingBadgeComplexArtExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_5 = fn(7630).getSingleRequirementThreshold;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeAccessibilityLabel = function getGiftingBadgeAccessibilityLabel(name) {
  let str;
  const count = closure_5(name);
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = util.intl;
  return "" + str + ", " + intl.formatToPlainString(_modDef2582.qvx9E4, { count });
};
export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(
  badgeProgress,
  currentTier,
  nextTier,
) {
  const tmp = closure_5(currentTier);
  const tmp2 = closure_5(nextTier);
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
export const useIsGiftingBadgeComplexArtEnabled = function useIsGiftingBadgeComplexArtEnabled(
  UserSettingsGiftingBadgeProgress,
) {
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig({ location: UserSettingsGiftingBadgeProgress }).enabled;
};
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(
  nextTier,
  isGiftingBadgeComplexArtEnabled,
) {
  if (isGiftingBadgeComplexArtEnabled) {
    let prop;
    if (!tmp) {
      prop = nextTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (nextTier != null) {
        simple_icon_url1 = nextTier.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    let simple_icon_url = prop;
  } else if (!tmp) {
    simple_icon_url = nextTier.simple_icon_url;
  }
  return simple_icon_url;
};
export const useGiftingBadgeCoachmarkVariant = function useGiftingBadgeCoachmarkVariant(platform) {
  ({ location: _location, enabled } = platform);
  if (enabled === undefined) {
    enabled = true;
  }
  let stateFromStores;
  closure_1 = undefined;
  const GiftingBadgeExperiment = stateFromStores(10192).GiftingBadgeExperiment;
  const enabled2 = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = stateFromStores(10197).GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  let str2 = "-DISABLED";
  if ("web" === platform.platform) {
    str2 = "";
  }
  let enabled3 = GiftingBadgeDesktopExperiment.useConfig({ location: "" + _location + str2 }).enabled;
  let tmp4 = enabled2;
  if ("web" === platform.platform) {
    if (enabled3) {
      enabled3 = enabled2;
    }
    tmp4 = enabled3;
  }
  const GiftingBadgeCoachmarkAudienceExperiment = tmp(10199).GiftingBadgeCoachmarkAudienceExperiment;
  if (tmp4) {
    str = "";
  }
  let obj = { location: "" + _location + str2 };
  const enabled4 = GiftingBadgeCoachmarkAudienceExperiment.useConfig({ location: "" + _location + str }).enabled;
  let obj2 = { location: "" + _location + str };
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
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
  const tmpResult = stateFromStores(504);
  const result = stateFromStores(4651).useIsDismissibleContentDismissed_UNSAFE(
    tmp(2028).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  );
  const tmpResult3 = stateFromStores(4651);
  const items1 = [BadgeDirectoryStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () =>
    badgeById.getBadgeById(stateFromStores(dependencyMap[12]).BadgeId.GIFTING),
  );
  if (tmp4) {
    tmp4 = !result;
  }
  if (tmp4) {
    tmp4 = enabled;
  }
  let tmp8 = tmp4;
  if (tmp4) {
    tmp8 = !enabled4;
  }
  if (tmp8) {
    tmp8 = stateFromStores;
  }
  stateFromStores = tmp8;
  let tmp9 = tmp4;
  if (tmp4) {
    tmp9 = enabled4;
  }
  if (tmp9) {
    tmp9 = null == stateFromStores1;
  }
  closure_1 = tmp9;
  const items2 = [tmp8, tmp9];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const badgeSummary = BadgeDirectoryActionCreators.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
    } else if (stateFromStores) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items2);
  if (enabled4) {
    let tmp12 = null;
    if (tmp4) {
      tmp12 = null;
      if (null != stateFromStores1) {
        tmp12 = null;
        if (!stateFromStores1.hidden) {
          if (stateFromStores) {
            tmp12 = "noCount";
          } else {
            tmp12 = null;
          }
        }
      }
    }
    let str3 = tmp12;
  } else {
    str3 = null;
    if (tmp4) {
      str3 = null;
      if (stateFromStores) {
        str3 = null;
        if (null != stateFromStores1) {
          str3 = "count";
        }
      }
    }
  }
  return str3;
};
