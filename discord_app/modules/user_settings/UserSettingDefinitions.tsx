// discord_app/modules/user_settings/UserSettingDefinitions.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(
  textAndImages,
  activityRestrictedGuildIds,
  explicitContentFromProto,
  explicitContentToProto,
  arg4,
) {
  let fn;
  _require = textAndImages;
  let closure_1 = activityRestrictedGuildIds;
  dependencyMap = explicitContentFromProto;
  let closure_3 = explicitContentToProto;
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
  function getSetting() {
    let tmp3;
    if (UserSettingsProtoStore.settings[textAndImages] != null) {
      tmp3 = tmp2[activityRestrictedGuildIds];
    }
    return explicitContentFromProto(tmp3);
  }
  const obj2 = require("ReactCompilerGating");
  const f85776 = (favorites) => {
    let closure_0 = favorites;
    const PreloadedUserSettingsActionCreators = getSetting(
      explicitContentFromProto[6],
    ).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(
      closure_0,
      async (arg0) => {
        arg0[f85776] = explicitContentToProto(favorites, arg0[f85776]);
      },
      closure_4,
    );
  };
  const obj3 = {
    getSetting,
    updateSetting: (fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return f85782(tmp2);
    },
    useSetting: obj2.isReactCompilerEnabled()
      ? () => {
          let first;
          const obj = react;
          const cResult = obj.c(1);
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [UserSettingsProtoStore];
            cResult[0] = items;
            first = items;
          } else {
            first = cResult[0];
          }
          const tmpResult = get_initialized;
          return tmpResult.useStateFromStores(first, getSetting, undefined, fn);
        }
      : () => {
          const items = [UserSettingsProtoStore];
          const obj = get_initialized;
          return obj.useStateFromStores(items, getSetting, undefined, fn);
        },
  };
  return obj3;
};
export function wrapSettingWithSelectiveSyncing(UserSettingDefinitions, text, inlineAttachmentMedia) {
  let closure_1 = text;
  let closure_2 = inlineAttachmentMedia;
  function getSetting() {
    const tmp = SelectivelySyncedUserSettingsStore.getState()[importDefault];
    let setting;
    if (tmp != null) {
      setting = tmp.settings[inlineAttachmentMedia];
    }
    if (setting == null) {
      setting = UserSettingDefinitions.getSetting();
    }
    return setting;
  }
  let obj = {
    getSetting,
    useSetting() {
      const setting = UserSettingDefinitions.useSetting();
      const items = [SelectivelySyncedUserSettingsStore];
      const obj = get_initialized;
      let stateFromStores = obj.useStateFromStores(items, () => {
        const tmp = SelectivelySyncedUserSettingsStore.getState()[closure_1_1];
        let tmp2;
        if (tmp != null) {
          tmp2 = tmp.settings[inlineAttachmentMedia];
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
      return f85782(tmp2);
    },
  };
  const f85779 = (arg0) => {
    let obj3;
    let obj5;
    let updateSettingResult;
    if (SelectivelySyncedUserSettingsStore.shouldSync(f85779)) {
      updateSettingResult = getSetting.updateSetting(arg0);
    } else {
      const obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: obj3 };
      obj3 = {};
      const obj4 = { settings: obj5 };
      obj5 = {};
      obj5[closure_1_2] = arg0;
      obj3[f85779] = obj4;
      const obj = require("Dispatcher");
      obj.dispatch(obj2);
      updateSettingResult = Promise.resolve();
    }
    return updateSettingResult;
  };
  return obj;
}
export function wrapSettingWithOverride(arg0, gifAutoPlay, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = gifAutoPlay;
  let closure_2 = arg2;
  let closure_3 = arg3;
  function getSetting() {
    let setting = closure_2();
    if (setting == null) {
      setting = closure_0.getSetting();
    }
    return setting;
  }
  let obj = {
    getSetting,
    useSetting() {
      const setting = closure_0.useSetting();
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
      return f85782(tmp2);
    },
  };
  const f85782 = (arg0) => {
    let items;
    const obj2 = { type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items };
    items = [f85782];
    const obj = gifAutoPlay(closure_2[7]);
    obj.dispatch(obj2);
    return getSetting.updateSetting(arg0);
  };
  return obj;
}
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(arg0) {
  let require;
  ({
    baseSetting: require,
    isEligible: importDefault,
    useIsEligible: dependencyMap,
    eligibleDefault: SelectivelySyncedUserSettingsStore,
    ineligibleDefault: UserSettingsProtoStore,
    onUseDefault: UserSettingsDelay,
  } = arg0);
  return {
    getSetting() {
      let setting = _require.getSetting();
      if (null == setting) {
        let tmp5;
        if (UserSettingsDelay != null) {
          tmp2();
        }
        if (importDefault()) {
          tmp5 = SelectivelySyncedUserSettingsStore();
        } else {
          tmp5 = UserSettingsProtoStore;
        }
        setting = tmp5;
      }
      return setting;
    },
    useSetting() {
      let setting = _require.useSetting();
      if (null == setting) {
        let tmp4;
        if (UserSettingsDelay != null) {
          UserSettingsDelay();
        }
        if (tmp2) {
          tmp4 = SelectivelySyncedUserSettingsStore();
        } else {
          tmp4 = UserSettingsProtoStore;
        }
        setting = tmp4;
      }
      return setting;
    },
    updateSetting(arg0) {
      return _require.updateSetting(arg0);
    },
  };
};
