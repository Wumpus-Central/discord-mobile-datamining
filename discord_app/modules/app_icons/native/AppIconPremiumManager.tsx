// discord_app/modules/app_icons/native/AppIconPremiumManager.tsx
import FreemiumAppIconIds from "FreemiumAppIconIds";
import mergeGuildAvatar from "mergeGuildAvatar";
import { getIconById } from "items";
import { AnalyticEvents } from "ME";
import "initialize";

let require = arg1;
const error = new require("ME")("AppIconPremiumManager");
const DEFAULT = require("FreemiumAppIconIds").FreemiumAppIconIds.DEFAULT;
let closure_9 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost" };
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
        return { value: "HermesInternal", done: null };
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
            let FreemiumAppIconIds = tmp5;
            let id = tmp2;
            let premiumType;
            let c1;
            id = undefined;
            premiumType = currentUser.getCurrentUser();
            let obj2 = outer1_0(outer1_2[8]);
            currentUser = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
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
          if (c1 !== outer1_8) {
            id = v0(c1);
            if (c1 !== id.id) {
              const _HermesInternal2 = HermesInternal;
              outer1_7.info("Icon " + outer1_1 + " is no longer available, resetting to default");
              premiumType = undefined;
              if (outer1_0 != null) {
                premiumType = outer1_0.premiumType;
              }
              if (premiumType == null) {
                premiumType = undefined;
              }
              outer1_0.resetIcon(outer1_1, premiumType, outer1_9.ORPHANED);
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = undefined;
              return obj;
            } else {
              const result = outer1_1(outer1_2[9]).canUsePremiumAppIcons(premiumType);
              let isPremium = !result;
              if (!result) {
                isPremium = outer1_2.isPremium;
              }
              if (isPremium) {
                const _HermesInternal = HermesInternal;
                outer1_7.info("User is not premium, resetting icon " + c1 + " to default");
                let premiumType1;
                if (premiumType != null) {
                  premiumType1 = premiumType.premiumType;
                }
                c1 = premiumType1;
                if (premiumType1 == null) {
                  c1 = undefined;
                }
                outer1_0.resetIcon(c1, c1, outer1_9.PREMIUM_LOST);
                const tmp15 = c1;
              }
              const obj7 = outer1_1(outer1_2[9]);
            }
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp39) {
        v0 = tmp;
        throw tmp39;
      }
    }
  })();
};
prototype["resetIcon"] = function resetIcon(arg0, c0, ORPHANED) {
  const _require = arg0;
  let closure_1 = ORPHANED;
  let obj = _require(7582);
  const setAppIconResult = _require(7582).setAppIcon(DEFAULT, c0);
  _require(7582).setAppIcon(DEFAULT, c0).then(() => {
    let obj = ORPHANED(outer1_2[10]);
    obj = { previous_icon_id: closure_0, reset_to_icon_id: outer1_8, reset_reason: ORPHANED };
    obj.track(outer1_6.APP_ICON_AUTO_RESET, obj);
  }).catch((arg0) => {
    logger.error("Failed to reset app icon:", arg0);
  });
};
const appIconPremiumManager = new AppIconPremiumManager();
const tmp2 = new require("ME")("AppIconPremiumManager");
let result = require("items").fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;