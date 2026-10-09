// === Module 10070: GiftingBadgesUtils ===

// Module 10070 (GiftingBadgesUtils)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2661 from "module_2661" /* 2661 */;
import BadgeId from "BadgeId" /* 8292 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8305 */;
import GiftingBadgeExperiment2 from "GiftingBadgeExperiment" /* 10066 */;
import GiftingBadgeDesktopExperiment2 from "GiftingBadgeDesktopExperiment" /* 10071 */;
import GiftingBadgeComplexArtExperiment2 from "GiftingBadgeComplexArtExperiment" /* 10072 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8300 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
let closure_5 = fn(8300).getSingleRequirementThreshold;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGiftingBadgesDesktopEnabled(location) {
  const cResult = c.c(4);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(tmp4).enabled;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const combined = "" + location + str;
  if (cResult[2] !== combined) {
    const obj3 = { location: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  return GiftingBadgeDesktopExperiment.useConfig(tmp6).enabled && enabled;
}) : (function useIsGiftingBadgesDesktopEnabled(location) {
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
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGiftingBadgeComplexArtEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig(tmp4).enabled;
}) : (function useIsGiftingBadgeComplexArtEnabled(location) {
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig({ location }).enabled;
});
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
  return "" + str + ", " + intl.formatToPlainString(_modDef2661.qvx9E4, { count });
};
export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = closure_5(currentTier);
  const tmp2 = closure_5(nextTier);
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
export const useIsGiftingBadgesDesktopEnabled = tmp2;
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
export const useIsGiftingBadgeComplexArtEnabled = tmp3;
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled) {
  if (isGiftingBadgeComplexArtEnabled) {
    let prop;
    if (!tmp) {
      prop = currentTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (currentTier != null) {
        simple_icon_url1 = currentTier.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    let simple_icon_url = prop;
  } else if (!tmp) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  return simple_icon_url;
};
export const useGiftingBadgeCoachmarkVariant = ReactCompilerGating.isReactCompilerEnabled() ? (function useGiftingBadgeCoachmarkVariant(platform) {
  const cResult = stateFromStores(576).c(14);
  ({ location: _location, enabled } = platform);
  let tmp4 = undefined === enabled;
  if (!tmp4) {
    tmp4 = enabled;
  }
  if (cResult[0] !== _location) {
    let obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const GiftingBadgeExperiment = tmp(10066).GiftingBadgeExperiment;
  const enabled2 = GiftingBadgeExperiment.useConfig(tmp5).enabled;
  let str = "-DISABLED";
  let str2 = "-DISABLED";
  if ("web" === platform.platform) {
    str2 = "";
  }
  const combined = "" + _location + str2;
  if (cResult[2] !== combined) {
    const obj3 = { location: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[3];
  }
  const GiftingBadgeDesktopExperiment = tmp(10071).GiftingBadgeDesktopExperiment;
  let enabled3 = GiftingBadgeDesktopExperiment.useConfig(tmp8).enabled;
  let tmp9 = enabled2;
  if ("web" === platform.platform) {
    if (enabled3) {
      enabled3 = enabled2;
    }
    tmp9 = enabled3;
  }
  if (tmp9) {
    str = "";
  }
  const combined1 = "" + _location + str;
  if (cResult[4] !== combined1) {
    const obj4 = { location: combined1 };
    cResult[4] = combined1;
    cResult[5] = obj4;
    let tmp11 = obj4;
  } else {
    tmp11 = cResult[5];
  }
  const GiftingBadgeCoachmarkAudienceExperiment = tmp(10073).GiftingBadgeCoachmarkAudienceExperiment;
  const enabled4 = GiftingBadgeCoachmarkAudienceExperiment.useConfig(tmp11).enabled;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class A {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.hasHadPremium();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    cResult[6] = items;
    cResult[7] = A;
    let tmp13 = A;
    let tmp12 = items;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp12, tmp13);
  const tmpResult = stateFromStores(504);
  const result = stateFromStores(4899).useIsDismissibleContentDismissed_UNSAFE(tmp(2049).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BadgeDirectoryStore];
    class A {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.hasHadPremium();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    cResult[8] = tmp20;
    cResult[9] = items1;
    let tmp18 = items1;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  const tmpResult3 = stateFromStores(4899);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp18, tmp17);
  if (tmp9) {
    tmp9 = !result;
  }
  if (tmp9) {
    tmp9 = tmp4;
  }
  let tmp22 = tmp9;
  if (tmp9) {
    tmp22 = !enabled4;
  }
  if (tmp22) {
    tmp22 = stateFromStores;
  }
  stateFromStores = tmp22;
  let tmp23 = tmp9;
  if (tmp9) {
    tmp23 = enabled4;
  }
  if (tmp23) {
    tmp23 = null == stateFromStores1;
  }
  closure_1 = tmp23;
  if (cResult[10] === tmp22) {
    if (cResult[11] === tmp23) {
      let tmp25 = cResult[12];
      let tmp26 = cResult[13];
    }
    const effect = noop.useEffect(tmp25, tmp26);
    class A {
      constructor() {
        currentUser = closure_1_6.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.hasHadPremium();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    if (enabled4) {
      let tmp29 = null;
      if (tmp9) {
        tmp29 = null;
        if (null != stateFromStores1) {
          tmp29 = null;
          if (!stateFromStores1.hidden) {
            if (stateFromStores) {
              tmp29 = "noCount";
            } else {
              tmp29 = null;
            }
          }
        }
      }
      let str3 = tmp29;
    } else {
      str3 = null;
      if (tmp9) {
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
  }
  const fn = function $() {
    if (closure_1) {
      const badgeSummary = BadgeDirectoryActionCreators.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
    } else if (stateFromStores) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  };
  const items2 = [tmp22, tmp23];
  cResult[10] = tmp22;
  cResult[11] = tmp23;
  cResult[12] = fn;
  cResult[13] = items2;
  tmp26 = items2;
  tmp25 = fn;
  const tmpResult4 = stateFromStores(504);
}) : (function useGiftingBadgeCoachmarkVariant(platform) {
  ({ location: _location, enabled } = platform);
  if (enabled === undefined) {
    enabled = true;
  }
  let stateFromStores;
  closure_1 = undefined;
  const GiftingBadgeExperiment = stateFromStores(10066).GiftingBadgeExperiment;
  const enabled2 = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = stateFromStores(10071).GiftingBadgeDesktopExperiment;
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
  const GiftingBadgeCoachmarkAudienceExperiment = tmp(10073).GiftingBadgeCoachmarkAudienceExperiment;
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
  const result = stateFromStores(4899).useIsDismissibleContentDismissed_UNSAFE(tmp(2049).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  const tmpResult3 = stateFromStores(4899);
  const items1 = [BadgeDirectoryStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => badgeById.getBadgeById(stateFromStores(dependencyMap[14]).BadgeId.GIFTING));
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
});