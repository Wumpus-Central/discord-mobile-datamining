// === Module 4070: obj100 ===

// Module 4070 (obj100)
import initialize from "initialize" /* 1303 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import { UserSettingsDelay } from "MAX_FAVORITES" /* 685 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, arg4) {
  let getSetting = textAndImages;
  let f74454 = activityRestrictedGuildIds;
  closure_2 = explicitContentFromProto;
  closure_3 = explicitContentToProto;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let INFREQUENT_USER_ACTION = obj.delay;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = fn.INFREQUENT_USER_ACTION;
  }
  fn = obj.comparator;
  if (fn === undefined) {
    fn = function l(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  getSetting = function getSetting() {
    let tmp3;
    if (INFREQUENT_USER_ACTION.settings[getSetting] != null) {
      tmp3 = tmp2[f74454];
    }
    return explicitContentFromProto(tmp3);
  };
  obj = {
    getSetting,
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f74461(tmp2);
    },
    useSetting() {
      const items = [INFREQUENT_USER_ACTION];
      return getSetting(explicitContentFromProto[4]).useStateFromStores(items, getSetting, undefined, fn);
    }
  };
  f74454 = (favorites) => {
    closure_0 = favorites;
    const PreloadedUserSettingsActionCreators = getSetting(explicitContentFromProto[3]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(closure_0, (arg0) => {
      arg0[closure_1_1] = explicitContentToProto(closure_0, arg0[closure_1_1]);
    }, INFREQUENT_USER_ACTION);
  };
  return obj;
};
export function wrapSettingWithSelectiveSyncing(arg0, text, animateEmoji) {
  closure_2 = animateEmoji;
  function getSetting() {
    const tmp = closure_1_3.getState()[f74458];
    let setting;
    if (tmp != null) {
      setting = tmp.settings[closure_2];
    }
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  }
  const f74458 = (arg0) => {
    if (closure_1_3.shouldSync(f74458)) {
      let updateSettingResult = getSetting.updateSetting(arg0);
    } else {
      f74458(animateEmoji[5]);
      const obj = {};
      obj1 = { settings: null };
      const obj2 = {};
      obj2[animateEmoji] = arg0;
      obj1[0] = obj2;
      obj[f74458] = obj1;
      obj[1] = obj;
      obj.dispatch(obj);
      updateSettingResult = Promise.resolve();
    }
    return updateSettingResult;
  };
  return {
    getSetting,
    useSetting() {
      const setting = getSetting.useSetting();
      const items = [closure_1_3];
      let stateFromStores = getSetting(animateEmoji[4]).useStateFromStores(items, () => {
        const tmp = closure_1_3.getState()[closure_1];
        let tmp2;
        if (tmp != null) {
          tmp2 = tmp.settings[closure_2];
        }
        return tmp2;
      });
      if (stateFromStores == null) {
        stateFromStores = setting;
      }
      return stateFromStores;
    },
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f74461(tmp2);
    }
  };
}
export function wrapSettingWithOverride(arg0, animateEmoji, arg2, arg3) {
  closure_2 = arg2;
  closure_3 = arg3;
  function getSetting() {
    let setting = dependencyMap();
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  }
  const f74461 = (arg0) => {
    const items = [f74461];
    f74461(709).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
    return getSetting.updateSetting(arg0);
  };
  return {
    getSetting,
    useSetting() {
      const setting = getSetting.useSetting();
      let tmp2 = callback();
      if (tmp2 == null) {
        tmp2 = setting;
      }
      return tmp2;
    },
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f74461(tmp2);
    }
  };
}
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: closure_3, ineligibleDefault: closure_4, onUseDefault: UserSettingsDelay } = arg0);
  return {
    getSetting() {
      const setting = closure_0.getSetting();
      if (null != setting) {
        return setting;
      } else {
        if (closure_5 != null) {
          tmp2();
        }
        if (callback()) {
          const tmp5 = callback2();
        }
      }
    },
    useSetting() {
      const setting = closure_0.useSetting();
      if (null != setting) {
        return setting;
      } else {
        if (callback3 != null) {
          callback3();
        }
        if (tmp2) {
          const tmp4 = callback2();
        }
      }
    },
    updateSetting(arg0) {
      return closure_0.updateSetting(arg0);
    }
  };
};