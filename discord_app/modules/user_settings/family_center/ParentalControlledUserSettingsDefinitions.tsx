// discord_app/modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx
import getSettings from "getSettings";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  let closure_0 = privacy;
  let closure_1 = defaultGuildsRestricted;
  let closure_2 = explicitContentFromProto;
  let getSettings = explicitContentToProto;
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
    const settings = explicitContentToProto.getSettings(arg0);
    let tmp3;
    if (settings != null) {
      if (settings[closure_0] != null) {
        tmp3 = tmp5[closure_1];
      }
    }
    return closure_2(tmp3);
  }
  obj = {
    getControlledSetting,
    updateControlledSetting: (arg0, arg1) => {
      let tmp = arg1;
      if (typeof arg1 !== "disabledUntil") {
        const settings = explicitContentToProto.getSettings(arg0);
        let tmp4;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp4 = tmp3[defaultGuildsRestricted];
          }
        }
        tmp = arg1(explicitContentFromProto(tmp4));
        const tmp11 = explicitContentFromProto;
      }
      closure_0 = tmp;
      if (null == arg0) {
        let resolved = Promise.resolve();
      } else {
        resolved = defaultGuildsRestricted(explicitContentFromProto[1]).updateTeenSettings(arg0, closure_0, (arg0) => {
          arg0[outer1_1] = outer1_3(closure_0, arg0[outer1_1]);
        });
        const obj = defaultGuildsRestricted(explicitContentFromProto[1]);
      }
      return resolved;
    },
    useControlledSetting(arg0) {
      const privacy = arg0;
      const items = [getSettings];
      const items1 = [arg0];
      return privacy(explicitContentFromProto[2]).useStateFromStores(items, () => {
        const settings = outer1_3.getSettings(closure_0);
        let tmp3;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp3 = tmp5[outer1_1];
          }
        }
        return outer1_2(tmp3);
      }, items1, fn);
    }
  };
  function S(arg0, arg1) {

  }
  return obj;
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  let getSettings;
  let closure_4;
  let closure_5;
  let dependencyMap;
  let importDefault;
  let require;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: getSettings, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
  return {
    getControlledSetting(arg0) {
      const controlledSetting = closure_0.getControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
      } else {
        if (closure_5 != null) {
          tmp2();
        }
        if (callback()) {
          let tmp5 = callback2();
        } else {
          tmp5 = closure_4;
        }
      }
    },
    useControlledSetting(arg0) {
      const controlledSetting = closure_0.useControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
      } else {
        if (callback3 != null) {
          callback3();
        }
        if (tmp2) {
          let tmp4 = callback2();
        } else {
          tmp4 = closure_4;
        }
      }
    },
    updateControlledSetting(selectedTeenId, addFlagResult) {
      return closure_0.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  };
};