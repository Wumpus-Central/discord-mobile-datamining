// === Module 14826: ParentalControlledUserSettingsDefinitions ===

// Module 14826 (ParentalControlledUserSettingsDefinitions)
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7540 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let fn = obj.comparator;
  if (fn === undefined) {
    fn = function a(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  function getControlledSetting(arg0) {
    const settings = FamilyCenterControlledSettingsStore.getSettings(arg0);
    let tmp3;
    if (settings != null) {
      if (settings[closure_0] != null) {
        tmp3 = tmp5[closure_1];
      }
    }
    return explicitContentFromProto(tmp3);
  }
  obj = {
    getControlledSetting,
    updateControlledSetting: (arg0, fn) => {
      let tmp = fn;
      if (typeof fn === "function") {
        const settings = explicitContentToProto.getSettings(arg0);
        let tmp4;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp4 = tmp3[defaultGuildsRestricted];
          }
        }
        tmp = fn(explicitContentFromProto(tmp4));
      }
      closure_0 = tmp;
      if (null == arg0) {
        let resolved = Promise.resolve();
      } else {
        resolved = defaultGuildsRestricted(explicitContentFromProto[1]).updateTeenSettings(arg0, closure_0, (arg0) => {
          arg0[closure_1] = closure_3(closure_0, arg0[closure_1]);
        });
        const obj = defaultGuildsRestricted(explicitContentFromProto[1]);
      }
      return resolved;
    },
    useControlledSetting(arg0) {
      privacy = arg0;
      const items = [settings];
      const items1 = [arg0];
      return privacy(explicitContentFromProto[2]).useStateFromStores(items, () => {
        settings = settings.getSettings(closure_0);
        let tmp3;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp3 = tmp5[closure_1];
          }
        }
        return closure_2(tmp3);
      }, items1, fn);
    }
  };
  function S(arg0, arg1) {

  }
  return obj;
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: FamilyCenterControlledSettingsStore, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
  return {
    getControlledSetting(arg0) {
      const controlledSetting = require.getControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
      } else {
        if (closure_1_5 != null) {
          tmp2();
        }
        if (importDefault()) {
          const tmp5 = FamilyCenterControlledSettingsStore();
        }
      }
    },
    useControlledSetting(arg0) {
      const controlledSetting = require.useControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
      } else {
        if (closure_1_5 != null) {
          closure_1_5();
        }
        if (tmp2) {
          const tmp4 = FamilyCenterControlledSettingsStore();
        }
      }
    },
    updateControlledSetting(selectedTeenId, addFlagResult) {
      return require.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  };
};