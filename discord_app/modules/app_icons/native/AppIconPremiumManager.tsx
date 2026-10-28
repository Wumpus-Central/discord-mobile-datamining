// discord_app/modules/app_icons/native/AppIconPremiumManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const AppIconConstants = fn(9899);
({ getIconById: hasOwnProperty, isHexagonCampaignAppIcon: metroRequire } = AppIconConstants);
const AnalyticEvents = fn(1084).AnalyticEvents;
const HexagonCampaignPerk = fn(5029).HexagonCampaignPerk;
let closure_9 = new LoggerDefault("AppIconPremiumManager");
const DEFAULT = fn(9900).FreemiumAppIconIds.DEFAULT;
let closure_11 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost", CAMPAIGN_EXPIRED: "campaign_expired" };
class AppIconPremiumManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      },
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
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            let currentUser;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            currentUser = tmp5.getCurrentUser();
            v1 = 1;
            v3 = 1;
            const obj4 = { value: _undefined(_undefined2[9]).fetchCurrentAppIcon(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_1 = value;
          if (closure_131_1 !== DEFAULT) {
            if (v3(closure_131_1)) {
              if (obj.isHexagonCampaignPerkExpiredForCurrentUser(constants.APP_ICON)) {
                const _HermesInternal3 = HermesInternal;
                logger.info("Campaign icon " + closure_131_1 + " has expired for this user, resetting to default");
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                _undefined = premiumType;
                if (premiumType == null) {
                  _undefined = undefined;
                }
                closure_132_0.resetIcon(closure_131_1, _undefined, constants2.CAMPAIGN_EXPIRED);
                v3 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              }
              obj = _undefined(_undefined2[10]);
            }
            closure_131_2 = v1(closure_131_1);
            if (closure_131_1 !== closure_131_2.id) {
              const _HermesInternal2 = HermesInternal;
              logger.info("Icon " + closure_131_1 + " is no longer available, resetting to default");
              let premiumType1;
              if (currentUser != null) {
                premiumType1 = currentUser.premiumType;
              }
              c1 = premiumType1;
              if (premiumType1 == null) {
                c1 = undefined;
              }
              closure_132_0.resetIcon(closure_131_1, c1, constants2.ORPHANED);
              v3 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              const canUseAllAppIconsResult = _undefined(_undefined2[11]).canUseAllAppIcons(currentUser);
              let isPremium = !canUseAllAppIconsResult;
              if (!canUseAllAppIconsResult) {
                isPremium = closure_131_2.isPremium;
              }
              if (isPremium) {
                const _HermesInternal = HermesInternal;
                logger.info("User is not premium, resetting icon " + closure_131_1 + " to default");
                let premiumType2;
                if (currentUser != null) {
                  premiumType2 = currentUser.premiumType;
                }
                _undefined2 = premiumType2;
                if (premiumType2 == null) {
                  _undefined2 = undefined;
                }
                closure_132_0.resetIcon(closure_131_1, _undefined2, constants2.PREMIUM_LOST);
              }
              const obj9 = _undefined(_undefined2[11]);
            }
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp63) {
        v3 = tmp;
        throw tmp63;
      }
    }
  })();
};
prototype["resetIcon"] = function resetIcon(previous_icon_id, c0, CAMPAIGN_EXPIRED) {
  _require = previous_icon_id;
  const reset_reason = CAMPAIGN_EXPIRED;
  const obj = require("AppIconUtils");
  const setAppIconResult = require("AppIconUtils").setAppIcon(DEFAULT, c0);
  require("AppIconUtils")
    .setAppIcon(DEFAULT, c0)
    .then(() => {
      AnalyticsUtilsDefault.track(AnalyticEvents.APP_ICON_AUTO_RESET, {
        previous_icon_id,
        reset_to_icon_id: DEFAULT,
        reset_reason,
      });
    })
    .catch((error) => {
      logger.error("Failed to reset app icon:", error);
    });
};
const appIconPremiumManager = new AppIconPremiumManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;
