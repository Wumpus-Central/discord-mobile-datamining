// === Module 17455: AppIconPremiumManager ===

// Module 17455 (AppIconPremiumManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AppIconConstants from "AppIconConstants" /* 8828 */;
import AppIconTypes from "AppIconTypes" /* 8829 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const getIconById = AppIconConstants.getIconById;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_7 = new LoggerDefault("AppIconPremiumManager");
new LoggerDefault("AppIconPremiumManager");
const DEFAULT = AppIconTypes.FreemiumAppIconIds.DEFAULT;
let closure_9 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost" };
class AppIconPremiumManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    let tmp;
    state = state.state;
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      tmp = "active" === state;
    } else {
      tmp = "background" === state;
    }
    if (tmp) {
      const self = this;
      const result = this.validateAndResetIfNeeded();
    }
  }
  validateAndResetIfNeeded() {
    const self = this;
    return (async () => {
      let _undefined2;
      let closure_2;
      let currentUser;
      let obj3;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let closure_1;
          let tmp;
          let _undefined;
          v3 = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp4;
              closure_1 = undefined;
              tmp = undefined;
              _undefined = currentUser.getCurrentUser();
              currentUser = 1;
              v3 = 1;
              const obj5 = { value: obj3.fetchCurrentAppIcon(), done: false };
              obj3 = _undefined(tmp[8]);
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            if (closure_1 !== DEFAULT) {
              tmp = v3(closure_1);
              if (closure_1 !== tmp.id) {
                const _HermesInternal2 = HermesInternal;
                logger.info("Icon " + closure_1 + " is no longer available, resetting to default");
                let premiumType;
                const resetIcon2 = closure_131_0.resetIcon;
                const tmp28 = closure_1;
                if (_undefined != null) {
                  premiumType = _undefined.premiumType;
                }
                _undefined = premiumType;
                if (premiumType == null) {
                  _undefined = undefined;
                }
                resetIcon2(tmp28, _undefined, constants.ORPHANED);
                v3 = 3;
                const obj = { value: undefined, done: true };
                return obj;
              } else {
                const obj7 = _undefined2(tmp[9]);
                const result = obj7.canUsePremiumAppIcons(_undefined);
                const isPremium = !result && tmp.isPremium;
                if (isPremium) {
                  const _HermesInternal = HermesInternal;
                  logger.info("User is not premium, resetting icon " + closure_1 + " to default");
                  let premiumType1;
                  const resetIcon = closure_131_0.resetIcon;
                  const tmp14 = closure_1;
                  if (_undefined != null) {
                    premiumType1 = _undefined.premiumType;
                  }
                  _undefined2 = premiumType1;
                  if (premiumType1 == null) {
                    _undefined2 = undefined;
                  }
                  resetIcon(tmp14, _undefined2, constants.PREMIUM_LOST);
                }
              }
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          v3 = 3;
          throw tmp38;
        }
      }
    })();
  }
  resetIcon(previous_icon_id, c1, PREMIUM_LOST) {
    let logger;
    _require = previous_icon_id;
    const reset_reason = PREMIUM_LOST;
    let obj = require("AppIconUtils");
    const setAppIconResult = obj.setAppIcon(DEFAULT, c1);
    const nextPromise = setAppIconResult.then(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { previous_icon_id, reset_to_icon_id: DEFAULT, reset_reason };
      obj.track(AnalyticEvents.APP_ICON_AUTO_RESET, obj2);
    });
    nextPromise.catch((error) => {
      logger.error("Failed to reset app icon:", error);
    });
  }
}
const prototype = AppIconPremiumManager.prototype;
const appIconPremiumManager = new AppIconPremiumManager();
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;