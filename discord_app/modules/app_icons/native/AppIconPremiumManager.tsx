// === Module 20174: AppIconPremiumManager ===

// Module 20174 (AppIconPremiumManager)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;
import UserStore from "UserStore" /* 1388 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;

let require = fn;
const getIconById = fn(11179).getIconById;
const AnalyticEvents = fn(1072).AnalyticEvents;
const HexagonCampaignPerk = fn(5331).HexagonCampaignPerk;
let closure_9 = new LoggerDefault("AppIconPremiumManager");
const DEFAULT = fn(5332).FreemiumAppIconIds.DEFAULT;
let closure_11 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost", CAMPAIGN_EXPIRED: "campaign_expired" };
class AppIconPremiumManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = AppIconPremiumManager.prototype;
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  state = state.state;
  if (obj.isIOS()) {
    let tmp = "active" === state;
  } else {
    tmp = "background" === state;
  }
  if (tmp) {
    const self = this;
    const result = this.validateAndResetIfNeeded();
  }
};
prototype["validateAndResetIfNeeded"] = function validateAndResetIfNeeded() {
  const self = this;
  return (async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let currentUser;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            currentUser = tmp5.getCurrentUser();
            v1 = 1;
            c7 = 1;
            const obj6 = { value: _self(_undefined2[10]).fetchCurrentAppIcon(), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_132_1 = value;
          if (closure_132_1 !== DEFAULT) {
            if (obj11.isHexagonCampaignAppIcon(closure_132_1)) {
              if (obj.isHexagonCampaignPerkExpiredForCurrentUser(constants.APP_ICON)) {
                if (obj3.UNSAFE_isDismissibleContentDismissed(_self(_undefined2[14]).DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET, { bypassNewUserCheck: true })) {
                  const appIconId = tmp2.previousPerkValues.appIconId;
                  _self = appIconId;
                  if (appIconId == null) {
                    _self = DEFAULT;
                  }
                  closure_132_2 = v1(_self);
                  if (closure_132_2.isPremium) {
                    if (!obj4.canUsePremiumAppIcons(currentUser)) {
                      let id = DEFAULT;
                    }
                    closure_132_3 = id;
                    const _HermesInternal3 = HermesInternal;
                    logger.info("Campaign icon " + closure_132_1 + " has expired for this user, resetting to " + closure_132_3);
                    let premiumType;
                    if (currentUser != null) {
                      premiumType = currentUser.premiumType;
                    }
                    let _undefined = premiumType;
                    if (premiumType == null) {
                      _undefined = undefined;
                    }
                    closure_133_0.resetIcon(closure_132_1, _undefined, constants2.CAMPAIGN_EXPIRED, closure_132_3);
                    c7 = 3;
                    const obj9 = { value: undefined, done: true };
                    return obj9;
                  }
                  id = closure_132_2.id;
                } else {
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
                obj3 = _self(_undefined2[13]);
              }
              obj = _self(_undefined2[12]);
            }
            closure_132_4 = v1(closure_132_1);
            if (closure_132_1 !== closure_132_4.id) {
              const _HermesInternal2 = HermesInternal;
              logger.info("Icon " + closure_132_1 + " is no longer available, resetting to default");
              let premiumType1;
              if (currentUser != null) {
                premiumType1 = currentUser.premiumType;
              }
              _undefined2 = premiumType1;
              if (premiumType1 == null) {
                _undefined2 = undefined;
              }
              closure_133_0.resetIcon(closure_132_1, _undefined2, constants2.ORPHANED);
              c7 = 3;
              const obj10 = { value: undefined, done: true };
              return obj10;
            } else {
              const result = _undefined(_undefined2[15]).canUsePremiumAppIcons(currentUser);
              let isPremium = !result;
              if (!result) {
                isPremium = closure_132_4.isPremium;
              }
              if (isPremium) {
                const _HermesInternal = HermesInternal;
                logger.info("User is not premium, resetting icon " + closure_132_1 + " to default");
                let premiumType2;
                if (currentUser != null) {
                  premiumType2 = currentUser.premiumType;
                }
                c3 = premiumType2;
                if (premiumType2 == null) {
                  c3 = undefined;
                }
                closure_133_0.resetIcon(closure_132_1, c3, constants2.PREMIUM_LOST);
              }
              const obj12 = _undefined(_undefined2[15]);
            }
            obj11 = _self(_undefined2[11]);
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp89) {
        c7 = tmp;
        throw tmp89;
      }
    }
  })();
};
prototype["resetIcon"] = function resetIcon(previous_icon_id, c1, CAMPAIGN_EXPIRED) {
  _require = previous_icon_id;
  const reset_reason = CAMPAIGN_EXPIRED;
  let tmp = DEFAULT;
  if (DEFAULT === undefined) {
    tmp = DEFAULT;
  }
  dependencyMap = tmp;
  const obj = require("AppIconUtils");
  const setAppIconResult = require("AppIconUtils").setAppIcon(tmp, c1);
  require("AppIconUtils").setAppIcon(tmp, c1).then(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.APP_ICON_AUTO_RESET, { previous_icon_id, reset_to_icon_id, reset_reason });
  }).catch((error) => {
    logger.error("Failed to reset app icon:", error);
  });
};
const appIconPremiumManager = new AppIconPremiumManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;