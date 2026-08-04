import initialize from "initialize";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsDelay } from "MAX_FAVORITES";

const require = arg1;
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, set) {
  let getSetting = textAndImages;
  let f73573 = activityRestrictedGuildIds;
  let closure_2 = explicitContentFromProto;
  let initialize = explicitContentToProto;
  let obj = set;
  if (set === undefined) {
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
      tmp3 = tmp2[f73573];
    }
    return closure_2(tmp3);
  };
  obj = {
    getSetting,
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f73580(tmp2);
    },
    useSetting() {
      const items = [INFREQUENT_USER_ACTION];
      return getSetting(explicitContentFromProto[4]).useStateFromStores(items, getSetting, undefined, fn);
    }
  };
  f73573 = (favorites) => {
    let closure_0 = favorites;
    const PreloadedUserSettingsActionCreators = getSetting(explicitContentFromProto[3]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(closure_0, (arg0) => {
      arg0[outer1_1] = outer1_3(closure_0, arg0[outer1_1]);
    }, INFREQUENT_USER_ACTION);
  };
  return obj;
};
export function wrapSettingWithSelectiveSyncing(defineProtoSetting, text, animateEmoji) {
  let getSetting = defineProtoSetting;
  let f73577 = text;
  let closure_2 = animateEmoji;
  getSetting = function getSetting() {
    const tmp = outer1_3.getState()[f73577];
    let setting;
    if (tmp != null) {
      setting = tmp.settings[closure_2];
    }
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  };
  f73577 = (arg0) => {
    if (outer1_3.shouldSync(f73577)) {
      let updateSettingResult = getSetting.updateSetting(arg0);
    } else {
      let obj = f73577(animateEmoji[5]);
      obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
      obj = {};
      const obj1 = { settings: null };
      const obj2 = {};
      obj2[animateEmoji] = arg0;
      obj1[0] = obj2;
      obj[f73577] = obj1;
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
      const items = [outer1_3];
      let stateFromStores = getSetting(animateEmoji[4]).useStateFromStores(items, () => {
        const tmp = outer1_3.getState()[closure_1];
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
      return f73580(tmp2);
    }
  };
}
export function wrapSettingWithOverride(defineProtoSetting, animateEmoji, arg2, arg3) {
  let getSetting = defineProtoSetting;
  let f73580 = animateEmoji;
  let closure_2 = arg2;
  let initialize = arg3;
  getSetting = function getSetting() {
    let setting = dependencyMap();
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  };
  f73580 = (arg0) => {
    const items = [f73580];
    f73580(709).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
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
      return f73580(tmp2);
    }
  };
}
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(set) {
  let UserSettingsDelay;
  let initialize;
  let handleConnectionClosedOrResumed;
  let dependencyMap;
  let importDefault;
  let require;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: initialize, ineligibleDefault: handleConnectionClosedOrResumed, onUseDefault: UserSettingsDelay } = set);
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
          let tmp5 = callback2();
        } else {
          tmp5 = handleConnectionClosedOrResumed;
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
          let tmp4 = callback2();
        } else {
          tmp4 = handleConnectionClosedOrResumed;
        }
      }
    },
    updateSetting(arg0) {
      return closure_0.updateSetting(arg0);
    }
  };
};