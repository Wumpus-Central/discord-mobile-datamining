// discord_app/modules/app_icons/native/AppIconPremiumManager.tsx
import timestampDefault from "../../debug/Logger.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import fetchCurrentAppIconDefault from "AppIconUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { getIconById } from "AppIconConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

let require = fn;
let closure_7 = new timestampDefault("AppIconPremiumManager");
const DEFAULT = require("FreemiumAppIconIds").FreemiumAppIconIds.DEFAULT;
let closure_9 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost" };
initializeDefault;
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
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === currentUser) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp5;
            let id = tmp2;
            let premiumType;
            c1 = undefined;
            id = undefined;
            premiumType = currentUser.getCurrentUser();
            let obj2 = self(closure_1_2[8]);
            currentUser = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj2.fetchCurrentAppIcon();
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c1 = arg1;
          if (c1 !== closure_1_8) {
            id = v0(c1);
            if (c1 !== id.id) {
              const _HermesInternal2 = HermesInternal;
              closure_1_7.info("Icon " + closure_1_1 + " is no longer available, resetting to default");
              premiumType = undefined;
              if (self != null) {
                premiumType = self.premiumType;
              }
              if (premiumType == null) {
                premiumType = undefined;
              }
              self.resetIcon(closure_1_1, premiumType, closure_1_9.ORPHANED);
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = undefined;
              return obj;
            } else {
              const result = closure_1_1(closure_1_2[9]).canUsePremiumAppIcons(premiumType);
              let isPremium = !result;
              if (!result) {
                isPremium = closure_1_2.isPremium;
              }
              if (isPremium) {
                const _HermesInternal = HermesInternal;
                closure_1_7.info("User is not premium, resetting icon " + c1 + " to default");
                let premiumType1;
                if (premiumType != null) {
                  premiumType1 = premiumType.premiumType;
                }
                c1 = premiumType1;
                if (premiumType1 == null) {
                  c1 = undefined;
                }
                self.resetIcon(c1, c1, closure_1_9.PREMIUM_LOST);
              }
              const obj7 = closure_1_1(closure_1_2[9]);
            }
          }
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp39) {
        v0 = tmp;
        throw tmp39;
      }
    }
  })();
};
prototype["resetIcon"] = function resetIcon(closure_1_1, c0, ORPHANED) {
  const _require = importDefault;
  closure_1 = ORPHANED;
  const setAppIconResult = fetchCurrentAppIconDefault.setAppIcon(DEFAULT, c0);
  fetchCurrentAppIconDefault.setAppIcon(DEFAULT, c0).then((result) => {
    ORPHANED(dependencyMap[10]);
    const obj = { previous_icon_id: closure_0, reset_to_icon_id: DEFAULT, reset_reason: ORPHANED };
    obj.track(AnalyticEvents.APP_ICON_AUTO_RESET, obj);
  }).catch((error) => {
    logger.error("Failed to reset app icon:", error);
  });
};
const appIconPremiumManager = new AppIconPremiumManager();
const tmp2 = new timestampDefault("AppIconPremiumManager");
let result = require("obj132").fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;