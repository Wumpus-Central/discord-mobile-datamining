// discord_app/modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx
import FamilyCenterControlledSettingsStore from "../../parent_tools/FamilyCenterControlledSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx",
);

export const defineParentalControlledSetting = function defineParentalControlledSetting(
  privacy,
  defaultGuildsRestricted,
  explicitContentFromProto,
  explicitContentToProto,
  arg4,
) {
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
      if (settings[closure_0] != null) {
        tmp3 = tmp5[closure_1];
      }
    }
    return explicitContentFromProto(tmp3);
  }
  const obj2 = require("ReactCompilerGating");
  function S(arg0, arg1) {}
  return {
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
        closure_0 = tmp2;
        if (null == arg0) {
          let resolved = Promise.resolve();
        } else {
          resolved = defaultGuildsRestricted(explicitContentFromProto[4]).updateTeenSettings(
            arg0,
            closure_0,
            (arg0) => {
              arg0[closure_1] = closure_3(closure_0, arg0[closure_1]);
            },
          );
          const obj = defaultGuildsRestricted(explicitContentFromProto[4]);
        }
        return resolved;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    useControlledSetting: require("ReactCompilerGating").isReactCompilerEnabled()
      ? (arg0) => {
          privacy = arg0;
          const cResult = privacy(explicitContentFromProto[2]).c(4);
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [settings];
            cResult[0] = items;
            let first = items;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== arg0) {
            fn = function o() {
              settings = settings.getSettings(closure_0);
              let tmp3;
              if (settings != null) {
                if (settings[closure_0] != null) {
                  tmp3 = tmp5[closure_1];
                }
              }
              return closure_2(tmp3);
            };
            const items1 = [arg0];
            cResult[1] = arg0;
            cResult[2] = fn;
            cResult[3] = items1;
            let tmp7 = items1;
            let tmp6 = fn;
          } else {
            tmp6 = cResult[2];
            tmp7 = cResult[3];
          }
          const obj = privacy(explicitContentFromProto[2]);
          return privacy(explicitContentFromProto[3]).useStateFromStores(first, tmp6, tmp7, fn);
        }
      : (arg0) => {
          privacy = arg0;
          const items = [settings];
          const items1 = [arg0];
          return privacy(explicitContentFromProto[3]).useStateFromStores(
            items,
            () => {
              settings = settings.getSettings(closure_0);
              let tmp3;
              if (settings != null) {
                if (settings[closure_0] != null) {
                  tmp3 = tmp5[closure_1];
                }
              }
              return closure_2(tmp3);
            },
            items1,
            fn,
          );
        },
  };
};
export const wrapParentalControlledSettingWithExperimentDefaults =
  function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
    ({
      baseSetting: require,
      isEligible: importDefault,
      useIsEligible: dependencyMap,
      eligibleDefault: FamilyCenterControlledSettingsStore,
      ineligibleDefault: closure_4,
      onUseDefault: closure_5,
    } = arg0);
    return {
      getControlledSetting(arg0) {
        const controlledSetting = _require.getControlledSetting(arg0);
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
      useControlledSetting(selectedTeenId) {
        const controlledSetting = _require.useControlledSetting(selectedTeenId);
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
        return _require.updateControlledSetting(selectedTeenId, addFlagResult);
      },
    };
  };
