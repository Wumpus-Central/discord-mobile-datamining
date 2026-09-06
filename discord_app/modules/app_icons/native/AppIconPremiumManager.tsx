// discord_app/modules/app_icons/native/AppIconPremiumManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const getIconById = fn(9323).getIconById;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = new LoggerDefault("AppIconPremiumManager");
const DEFAULT = fn(9324).FreemiumAppIconIds.DEFAULT;
let closure_9 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost" };
class AppIconPremiumManager extends tmp3 {
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
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === currentUser) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            let currentUser2;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            currentUser2 = currentUser.getCurrentUser();
            let obj2 = _undefined(tmp2[8]);
            currentUser = 1;
            v3 = 1;
            const obj1 = { value: obj2.fetchCurrentAppIcon(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_1 = value;
          if (closure_130_1 !== DEFAULT) {
            closure_130_2 = v3(closure_130_1);
            if (closure_130_1 !== closure_130_2.id) {
              const _HermesInternal2 = HermesInternal;
              logger.info("Icon " + closure_130_1 + " is no longer available, resetting to default");
              let premiumType;
              if (currentUser2 != null) {
                premiumType = currentUser2.premiumType;
              }
              _undefined = premiumType;
              if (premiumType == null) {
                _undefined = undefined;
              }
              closure_131_0.resetIcon(closure_130_1, _undefined, constants.ORPHANED);
              v3 = 3;
              obj = { value: undefined, done: true };
              return obj;
            } else {
              const result = _undefined2(tmp2[9]).canUsePremiumAppIcons(currentUser2);
              let isPremium = !result;
              if (!result) {
                isPremium = closure_130_2.isPremium;
              }
              if (isPremium) {
                const _HermesInternal = HermesInternal;
                logger.info("User is not premium, resetting icon " + closure_130_1 + " to default");
                let premiumType1;
                if (currentUser2 != null) {
                  premiumType1 = currentUser2.premiumType;
                }
                _undefined2 = premiumType1;
                if (premiumType1 == null) {
                  _undefined2 = undefined;
                }
                closure_131_0.resetIcon(closure_130_1, _undefined2, constants.PREMIUM_LOST);
              }
              const obj7 = _undefined2(tmp2[9]);
            }
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp39) {
        v3 = tmp;
        throw tmp39;
      }
    }
  })();
};
prototype["resetIcon"] = function resetIcon(previous_icon_id, c0, ORPHANED) {
  _require = previous_icon_id;
  const reset_reason = ORPHANED;
  let obj = require("AppIconUtils");
  const setAppIconResult = require("AppIconUtils").setAppIcon(DEFAULT, c0);
  require("AppIconUtils")
    .setAppIcon(DEFAULT, c0)
    .then(() => {
      const obj = { previous_icon_id, reset_to_icon_id: DEFAULT, reset_reason };
      obj.track(AnalyticEvents.APP_ICON_AUTO_RESET, obj);
    })
    .catch((error) => {
      logger.error("Failed to reset app icon:", error);
    });
};
const appIconPremiumManager = new AppIconPremiumManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;
