// discord_app/modules/premium/gifting/GiftingBadgesUtils.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import _modDef2617 from "GiftingBadge.messages.js";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryStore2 from "../../badges/BadgeDirectoryStore.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import GiftingBadgeExperiment2 from "experiments/GiftingBadgeExperiment.tsx";
import GiftingBadgeDesktopExperiment2 from "experiments/GiftingBadgeDesktopExperiment.tsx";
import GiftingBadgeComplexArtExperiment2 from "experiments/GiftingBadgeComplexArtExperiment.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let _require, currentUser, platform;

let closure_5 = BadgeDirectoryStore2.getSingleRequirementThreshold;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
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
        tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
      const tmp7 = GiftingBadgeDesktopExperiment.useConfig(tmp6).enabled && enabled;
      return tmp7;
    }
  : (location) => {
      const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
      const obj = { location };
      const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
      const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
      let str = "-DISABLED";
      const useConfig = GiftingBadgeDesktopExperiment.useConfig;
      if (enabled) {
        str = "";
      }
      const obj2 = { location: "" + location + str };
      const tmp = useConfig(obj2).enabled && enabled;
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
      return GiftingBadgeComplexArtExperiment.useConfig(tmp4).enabled;
    }
  : (location) => {
      const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
      const obj = { location };
      return GiftingBadgeComplexArtExperiment.useConfig(obj).enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (platform) => {
      let _location;
      let badgeById;
      let closure_0;
      let enabled;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp17;
      let tmp18;
      let tmp5;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(14);
      ({ location: _location, enabled } = platform);
      let tmp4 = undefined === enabled;
      platform = platform.platform;
      if (!tmp4) {
        tmp4 = enabled;
      }
      if (cResult[0] !== _location) {
        let obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const GiftingBadgeExperiment = tmp(10484).GiftingBadgeExperiment;
      const enabled2 = GiftingBadgeExperiment.useConfig(tmp5).enabled;
      let str = "-DISABLED";
      let str2 = "-DISABLED";
      if ("web" === platform) {
        str2 = "";
      }
      const combined = "" + _location + str2;
      if (cResult[2] !== combined) {
        const obj3 = { location: combined };
        cResult[2] = combined;
        cResult[3] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[3];
      }
      const GiftingBadgeDesktopExperiment = tmp(10489).GiftingBadgeDesktopExperiment;
      let enabled3 = GiftingBadgeDesktopExperiment.useConfig(tmp8).enabled;
      let tmp9 = enabled2;
      if ("web" === platform) {
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
        tmp11 = obj4;
      } else {
        tmp11 = cResult[5];
      }
      const GiftingBadgeCoachmarkAudienceExperiment = tmp(10491).GiftingBadgeCoachmarkAudienceExperiment;
      const enabled4 = GiftingBadgeCoachmarkAudienceExperiment.useConfig(tmp11).enabled;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function x() {
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.hasHadPremium();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[6] = items;
        cResult[7] = fn;
        tmp13 = fn;
        tmp12 = items;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
      const tmpResult3 = require("DismissibleContentUnsafeUtils");
      const result = tmpResult3.useIsDismissibleContentDismissed_UNSAFE(
        tmp(2036).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
      );
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [BadgeDirectoryStore];
        const fn2 = function v() {
          return badgeById.getBadgeById(closure_0(dependencyMap[14]).BadgeId.GIFTING);
        };
        cResult[8] = fn2;
        cResult[9] = items1;
        tmp18 = items1;
        tmp17 = fn2;
      } else {
        tmp17 = cResult[8];
        tmp18 = cResult[9];
      }
      const tmpResult4 = require("get initialized");
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp18, tmp17);
      if (tmp9) {
        tmp9 = !result;
      }
      if (tmp9) {
        tmp9 = tmp4;
      }
      _require = tmp21;
      let closure_1 = tmp22;
      if (cResult[10] === (tmp9 && !enabled4 && stateFromStores)) {
        let tmp24;
        let tmp25;
        let str3;
        if (cResult[11] === (tmp9 && enabled4 && null == stateFromStores1)) {
          tmp24 = cResult[12];
          tmp25 = cResult[13];
        }
        const effect = react.useEffect(tmp24, tmp25);
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
          str3 = tmp29;
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
      class N {
        constructor() {
          if (closure_1) {
            const obj2 = BadgeDirectoryActionCreators;
            const badgeSummary = obj2.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
          } else if (closure_0) {
            const obj = BadgeDirectoryActionCreators;
            const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
          }
        }
      }
      const items2 = [tmp9 && !enabled4 && stateFromStores, tmp22];
      cResult[10] = tmp9 && !enabled4 && stateFromStores;
      cResult[11] = tmp9 && enabled4 && null == stateFromStores1;
      cResult[12] = N;
      cResult[13] = items2;
      tmp25 = items2;
      tmp24 = N;
    }
  : (platform) => {
      let _location;
      let badgeById;
      let closure_0;
      let enabled;
      let str3;
      ({ location: _location, enabled } = platform);
      platform = platform.platform;
      if (enabled === undefined) {
        enabled = true;
      }
      _require = undefined;
      let closure_1;
      const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
      const enabled2 = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
      const GiftingBadgeDesktopExperiment = require("GiftingBadgeDesktopExperiment").GiftingBadgeDesktopExperiment;
      let str = "-DISABLED";
      let str2 = "-DISABLED";
      const useConfig = GiftingBadgeDesktopExperiment.useConfig;
      if ("web" === platform) {
        str2 = "";
      }
      let obj = { location: "" + _location + str2 };
      let enabled3 = useConfig(obj).enabled;
      let tmp4 = enabled2;
      if ("web" === platform) {
        if (enabled3) {
          enabled3 = enabled2;
        }
        tmp4 = enabled3;
      }
      const GiftingBadgeCoachmarkAudienceExperiment = tmp(10491).GiftingBadgeCoachmarkAudienceExperiment;
      const useConfig2 = GiftingBadgeCoachmarkAudienceExperiment.useConfig;
      if (tmp4) {
        str = "";
      }
      let obj2 = { location: "" + _location + str };
      const enabled4 = useConfig2(obj2).enabled;
      const items = [UserStore];
      const tmpResult = require("get initialized");
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
      const tmpResult3 = require("DismissibleContentUnsafeUtils");
      const result = tmpResult3.useIsDismissibleContentDismissed_UNSAFE(
        tmp(2036).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
      );
      const items1 = [BadgeDirectoryStore];
      const tmpResult4 = require("get initialized");
      const stateFromStores1 = tmpResult4.useStateFromStores(items1, () =>
        badgeById.getBadgeById(closure_0(dependencyMap[14]).BadgeId.GIFTING),
      );
      if (tmp4) {
        tmp4 = !result;
      }
      if (tmp4) {
        tmp4 = enabled;
      }
      _require = tmp8;
      closure_1 = tmp9;
      const items2 = [tmp4 && !enabled4 && stateFromStores, tmp9];
      const effect = react.useEffect(() => {
        if (closure_1) {
          const obj2 = BadgeDirectoryActionCreators;
          const badgeSummary = obj2.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
        } else if (closure_0) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
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
        str3 = tmp12;
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
  const intl = intl2.intl;
  return "" + str + ", " + intl.formatToPlainString(_modDef2617.qvx9E4, { count });
};
export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(
  badgeProgress,
  currentTier,
  nextTier,
) {
  let num3;
  const tmp = closure_5(currentTier);
  const tmp2 = closure_5(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = (badgeProgress / tmp2) * 100;
    }
    num3 = num6;
  } else {
    num3 = 100;
    if (tmp > 0) {
      const _Math = Math;
      num3 = (Math.min(tmp, badgeProgress) / tmp) * 100;
    }
  }
  return Math.min(Math.max(num3, 0), 100);
};
export const useIsGiftingBadgesDesktopEnabled = tmp2;
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const obj = { location };
  let enabled = GiftingBadgeExperiment.getConfig(obj).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
    const obj2 = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj2).enabled;
  }
  return enabled;
};
export const useIsGiftingBadgeComplexArtEnabled = tmp3;
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(
  currentTier,
  isGiftingBadgeComplexArtEnabled,
) {
  let simple_icon_url;
  const tmp2 = isGiftingBadgeComplexArtEnabled;
  if (tmp2) {
    let prop;
    if (currentTier != null) {
      prop = currentTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (currentTier != null) {
        simple_icon_url1 = currentTier.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    simple_icon_url = prop;
  } else if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  return simple_icon_url;
};
export const useGiftingBadgeCoachmarkVariant = tmp4;
