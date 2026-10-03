// === Module 2032: UserSettingDefinitions ===

// Module 2032 (UserSettingDefinitions)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

require = fn;
const UserSettingsDelay = fn(1095).UserSettingsDelay;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, arg4) {
  let getSetting = textAndImages;
  let f85499 = activityRestrictedGuildIds;
  dependencyMap = explicitContentFromProto;
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
    fn = function c(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  getSetting = function getSetting() {
    let tmp3;
    if (UserSettingsProtoStore.settings[getSetting] != null) {
      tmp3 = tmp2[f85499];
    }
    return explicitContentFromProto(tmp3);
  };
  const obj2 = getSetting(558);
  f85499 = (favorites) => {
    closure_0 = favorites;
    const PreloadedUserSettingsActionCreators = getSetting(explicitContentFromProto[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(closure_0, async (arg0) => {
      arg0[f85499] = closure_3(closure_0, arg0[f85499]);
    }, INFREQUENT_USER_ACTION);
  };
  return {
    getSetting,
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f85505(tmp2);
    },
    useSetting: getSetting(558).isReactCompilerEnabled() ? (() => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return initialize.useStateFromStores(first, getSetting, undefined, fn);
    }) : (() => {
      const items = [UserSettingsProtoStore];
      return initialize.useStateFromStores(items, getSetting, undefined, fn);
    })
  };
};
export function wrapSettingWithSelectiveSyncing(UserSettingDefinitions, text, animateEmoji) {
  closure_2 = animateEmoji;
  function getSetting() {
    const tmp = SelectivelySyncedUserSettingsStore.getState()[f85502];
    let setting;
    if (tmp != null) {
      setting = tmp.settings[closure_2];
    }
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  }
  const f85502 = (arg0) => {
    if (SelectivelySyncedUserSettingsStore.shouldSync(f85502)) {
      let updateSettingResult = getSetting.updateSetting(arg0);
    } else {
      const obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
      const obj3 = {};
      const obj4 = { settings: null };
      const obj5 = {};
      obj5[closure_2] = arg0;
      obj4.settings = obj5;
      obj3[f85502] = obj4;
      obj2.changes = obj3;
      DispatcherDefault.dispatch(obj2);
      updateSettingResult = Promise.resolve();
    }
    return updateSettingResult;
  };
  return {
    getSetting,
    useSetting() {
      const setting = getSetting.useSetting();
      const items = [SelectivelySyncedUserSettingsStore];
      let stateFromStores = initialize.useStateFromStores(items, () => {
        const tmp = state.getState()[closure_1_1];
        let tmp2;
        if (tmp != null) {
          tmp2 = tmp.settings[animateEmoji];
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
      return f85505(tmp2);
    }
  };
}
export function wrapSettingWithOverride(UserSettingDefinitions, animateEmoji, arg2, arg3) {
  closure_2 = arg2;
  closure_3 = arg3;
  function getSetting() {
    let setting = closure_2();
    if (setting == null) {
      setting = getSetting.getSetting();
    }
    return setting;
  }
  const f85505 = (arg0) => {
    const obj2 = { type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: null };
    const items = [f85505];
    obj2.settings = items;
    DispatcherDefault.dispatch(obj2);
    return getSetting.updateSetting(arg0);
  };
  return {
    getSetting,
    useSetting() {
      const setting = getSetting.useSetting();
      let tmp2 = closure_3();
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
      return f85505(tmp2);
    }
  };
}
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: SelectivelySyncedUserSettingsStore, ineligibleDefault: UserSettingsProtoStore, onUseDefault: UserSettingsDelay } = arg0);
  return {
    getSetting() {
      const setting = require.getSetting();
      if (null != setting) {
        return setting;
      } else {
        if (UserSettingsDelay != null) {
          tmp2();
        }
        if (importDefault()) {
          const tmp5 = SelectivelySyncedUserSettingsStore();
        }
      }
    },
    useSetting() {
      const setting = require.useSetting();
      if (null != setting) {
        return setting;
      } else {
        if (UserSettingsDelay != null) {
          UserSettingsDelay();
        }
        if (tmp2) {
          const tmp4 = SelectivelySyncedUserSettingsStore();
        }
      }
    },
    updateSetting(arg0) {
      return require.updateSetting(arg0);
    }
  };
};