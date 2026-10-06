// === Module 14643: ParentalControlledUserSettingsDefinitions ===

// Module 14643 (ParentalControlledUserSettingsDefinitions)
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7064 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  _require = privacy;
  dependencyMap = explicitContentFromProto;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let fn = obj.comparator;
  if (fn === undefined) {
    fn = function u(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  function getControlledSetting(arg0) {
    const settings = FamilyCenterControlledSettingsStore.getSettings(arg0);
    let tmp3;
    if (settings != null) {
      if (settings[privacy] != null) {
        tmp3 = tmp5[defaultGuildsRestricted];
      }
    }
    return explicitContentFromProto(tmp3);
  }
  const obj2 = require("ReactCompilerGating");
  function S(arg0, arg1) {

  }
  const obj3 = {
    getControlledSetting,
    updateControlledSetting: (arg0, fn) => {
      let tmp2 = fn;
      if (typeof fn === "function") {
        if (typeof getControlledSetting === "function") {
          const settings = explicitContentToProto.getSettings(arg0);
          let tmp7;
          if (settings != null) {
            if (settings[closure_0] != null) {
              tmp7 = tmp9[defaultGuildsRestricted];
            }
          }
          tmp2 = fn(explicitContentFromProto(tmp7));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof S === "function") {
        let resolved;
        closure_0 = tmp2;
        if (null == arg0) {
          resolved = Promise.resolve();
        } else {
          const obj = defaultGuildsRestricted(explicitContentFromProto[4]);
          resolved = obj.updateTeenSettings(arg0, closure_0, (arg0) => {
            arg0[defaultGuildsRestricted] = explicitContentToProto(closure_0, arg0[defaultGuildsRestricted]);
          });
        }
        return resolved;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    useControlledSetting: obj2.isReactCompilerEnabled() ? ((arg0) => {
      let closure_0;
      let first;
      let settings;
      let tmp6;
      let tmp7;
      privacy = arg0;
      const obj = privacy(explicitContentFromProto[2]);
      const cResult = obj.c(4);
      const tmp = privacy;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [settings];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        fn = function o() {
          settings = settings.getSettings(closure_0);
          let tmp3;
          if (settings != null) {
            if (settings[closure_0] != null) {
              tmp3 = tmp5[defaultGuildsRestricted];
            }
          }
          return explicitContentFromProto(tmp3);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(explicitContentFromProto[3]);
      return tmpResult.useStateFromStores(first, tmp6, tmp7, fn);
    }) : ((arg0) => {
      let closure_0;
      let settings;
      privacy = arg0;
      const items = [settings];
      const items1 = [arg0];
      const obj = privacy(explicitContentFromProto[3]);
      return obj.useStateFromStores(items, () => {
        settings = settings.getSettings(closure_0);
        let tmp3;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp3 = tmp5[defaultGuildsRestricted];
          }
        }
        return explicitContentFromProto(tmp3);
      }, items1, fn);
    })
  };
  return obj3;
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  let closure_4;
  let closure_5;
  let require;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: FamilyCenterControlledSettingsStore, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
  return {
    getControlledSetting(arg0) {
      let controlledSetting = _require.getControlledSetting(arg0);
      if (null == controlledSetting) {
        let tmp5;
        if (closure_5 != null) {
          tmp2();
        }
        if (importDefault()) {
          tmp5 = FamilyCenterControlledSettingsStore();
        } else {
          tmp5 = closure_4;
        }
        controlledSetting = tmp5;
      }
      return controlledSetting;
    },
    useControlledSetting(selectedTeenId) {
      let controlledSetting = _require.useControlledSetting(selectedTeenId);
      if (null == controlledSetting) {
        let tmp4;
        if (closure_5 != null) {
          closure_5();
        }
        if (tmp2) {
          tmp4 = FamilyCenterControlledSettingsStore();
        } else {
          tmp4 = closure_4;
        }
        controlledSetting = tmp4;
      }
      return controlledSetting;
    },
    updateControlledSetting(selectedTeenId, addFlagResult) {
      return _require.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  };
};