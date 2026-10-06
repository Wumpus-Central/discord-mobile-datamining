// discord_app/modules/parent_tools/hooks/useParentalControlSettings.tsx
import react2 from "../../../../_runtime/00576_react.js";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import Constants from "../../safety_common/Constants.tsx";
import useUserLinks from "useUserLinks.tsx";
import useSelectedTeen from "useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../user_settings/family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterControlledSettingsUtils from "../FamilyCenterControlledSettingsUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import FamilyCenterControlledSettingsStore from "../FamilyCenterControlledSettingsStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c5;

const SafetyToastType = Constants.SafetyToastType;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(9);
      const obj2 = useSelectedTeen;
      const selectedTeen = obj2.useSelectedTeen();
      const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
      let id;
      const useControlledSetting = ParentalControlledExplicitContent.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      if (null == selectedTeen) {
        return null;
      } else {
        let id1;
        if (selectedTeen != null) {
          id1 = selectedTeen.id;
        }
        let prop;
        if (controlledSetting != null) {
          prop = controlledSetting.explicitContentNonFriendDm;
        }
        if (cResult[0] === id1) {
          let tmp9;
          if (cResult[1] === prop) {
            tmp9 = cResult[2];
          }
          let id2;
          if (selectedTeen != null) {
            id2 = selectedTeen.id;
          }
          let prop1;
          if (controlledSetting != null) {
            prop1 = controlledSetting.explicitContentFriendDm;
          }
          if (cResult[3] === id2) {
            let tmp13;
            if (cResult[4] === prop1) {
              tmp13 = cResult[5];
            }
            if (cResult[6] === tmp9) {
              let tmp15;
              if (cResult[7] === tmp13) {
                tmp15 = cResult[8];
              }
              return tmp15;
            }
            const obj3 = {
              explicitContentNonFriendDm: tmp9,
              explicitContentFriendDm: tmp13,
              explicitContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR,
            };
            cResult[6] = tmp9;
            cResult[7] = tmp13;
            cResult[8] = obj3;
            tmp15 = obj3;
          }
          const obj4 = { teenId: id2, setting: prop1, isFriend: true };
          const tmpResult = FamilyCenterControlledSettingsUtils;
          const explicitContentSettingWithDefaultsForTeen =
            tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj4);
          cResult[3] = id2;
          cResult[4] = prop1;
          cResult[5] = explicitContentSettingWithDefaultsForTeen;
          tmp13 = explicitContentSettingWithDefaultsForTeen;
        }
        const obj5 = { teenId: id1, setting: prop };
        const tmpResult2 = FamilyCenterControlledSettingsUtils;
        const explicitContentSettingWithDefaultsForTeen1 =
          tmpResult2.resolveExplicitContentSettingWithDefaultsForTeen(obj5);
        cResult[0] = id1;
        cResult[1] = prop;
        cResult[2] = explicitContentSettingWithDefaultsForTeen1;
        tmp9 = explicitContentSettingWithDefaultsForTeen1;
      }
    }
  : () => {
      let obj4;
      let prop;
      let prop1;
      let resolveExplicitContentSettingWithDefaultsForTeen2;
      const obj = useSelectedTeen;
      const selectedTeen = obj.useSelectedTeen();
      const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
      let id;
      const useControlledSetting = ParentalControlledExplicitContent.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      let tmp6 = null;
      if (null != selectedTeen) {
        let id1;
        const resolveExplicitContentSettingWithDefaultsForTeen =
          FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen;
        FamilyCenterControlledSettingsUtils;
        if (selectedTeen != null) {
          id1 = selectedTeen.id;
        }
        const obj2 = { teenId: id1, setting: prop };
        prop = undefined;
        if (controlledSetting != null) {
          prop = controlledSetting.explicitContentNonFriendDm;
        }
        let id2;
        const obj3 = {
          explicitContentNonFriendDm: resolveExplicitContentSettingWithDefaultsForTeen(obj2),
          explicitContentFriendDm: resolveExplicitContentSettingWithDefaultsForTeen2(obj4),
          explicitContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR,
        };
        resolveExplicitContentSettingWithDefaultsForTeen2 =
          FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen;
        FamilyCenterControlledSettingsUtils;
        if (selectedTeen != null) {
          id2 = selectedTeen.id;
        }
        obj4 = { teenId: id2, setting: prop1, isFriend: true };
        prop1 = undefined;
        if (controlledSetting != null) {
          prop1 = controlledSetting.explicitContentFriendDm;
        }
        tmp6 = obj3;
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let goreContentFriendDm;
      let goreContentNonFriendDm;
      const obj = react2;
      const cResult = obj.c(9);
      const obj2 = useSelectedTeen;
      const selectedTeen = obj2.useSelectedTeen();
      const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
      let id;
      const useControlledSetting = ParentalControlledGoreContent.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      if (null == selectedTeen) {
        return null;
      } else {
        let tmp7;
        let tmp8;
        let tmp10;
        if (cResult[0] !== controlledSetting) {
          let obj3 = controlledSetting;
          if (controlledSetting == null) {
            obj3 = {};
          }
          cResult[0] = controlledSetting;
          cResult[1] = obj3;
          tmp7 = obj3;
        } else {
          tmp7 = cResult[1];
        }
        ({ goreContentNonFriendDm, goreContentFriendDm } = tmp7);
        if (cResult[2] !== goreContentNonFriendDm) {
          let goreSettingWithDefaultsForTeen = goreContentNonFriendDm;
          const tmpResult = FamilyCenterControlledSettingsUtils;
          if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
            const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
            goreSettingWithDefaultsForTeen = tmpResult4.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
          }
          cResult[2] = goreContentNonFriendDm;
          cResult[3] = goreSettingWithDefaultsForTeen;
          tmp8 = goreSettingWithDefaultsForTeen;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== goreContentFriendDm) {
          let goreSettingWithDefaultsForTeen1 = goreContentFriendDm;
          const tmpResult5 = FamilyCenterControlledSettingsUtils;
          if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
            const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
            goreSettingWithDefaultsForTeen1 = tmpResult6.resolveGoreSettingWithDefaultsForTeen({
              isDm: true,
              isFriend: true,
            });
          }
          cResult[4] = goreContentFriendDm;
          cResult[5] = goreSettingWithDefaultsForTeen1;
          tmp10 = goreSettingWithDefaultsForTeen1;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp8) {
          let tmp12;
          if (cResult[7] === tmp10) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj4 = {
          goreContentNonFriendDm: tmp8,
          goreContentFriendDm: tmp10,
          goreContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR,
        };
        cResult[6] = tmp8;
        cResult[7] = tmp10;
        cResult[8] = obj4;
        tmp12 = obj4;
      }
    }
  : () => {
      let goreContentFriendDm;
      let goreContentNonFriendDm;
      const obj = useSelectedTeen;
      const selectedTeen = obj.useSelectedTeen();
      const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
      let id;
      const useControlledSetting = ParentalControlledGoreContent.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      let controlledSetting = useControlledSetting(id);
      if (null == selectedTeen) {
        return null;
      } else {
        if (controlledSetting == null) {
          controlledSetting = {};
        }
        ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
        const tmpResult = FamilyCenterControlledSettingsUtils;
        if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
          const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
          goreContentNonFriendDm = tmpResult4.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
        }
        const obj2 = {
          goreContentNonFriendDm,
          goreContentFriendDm,
          goreContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR,
        };
        const tmpResult5 = FamilyCenterControlledSettingsUtils;
        if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
          const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
          goreContentFriendDm = tmpResult6.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
        }
        return obj2;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useSelectedTeen;
      const selectedTeen = obj.useSelectedTeen();
      const ParentalControlledDefaultGuildsRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
      let id;
      const useControlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      const ParentalControlledDefaultGuildsRestrictedV2 =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      let id1;
      const useControlledSetting2 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting;
      if (selectedTeen != null) {
        id1 = selectedTeen.id;
      }
      let controlledSetting2 = useControlledSetting2(id1);
      if (null == controlledSetting2) {
        controlledSetting2 = controlledSetting || controlledSetting;
      }
      return controlledSetting2;
    }
  : () => {
      const obj = useSelectedTeen;
      const selectedTeen = obj.useSelectedTeen();
      const ParentalControlledDefaultGuildsRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
      let id;
      const useControlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      const ParentalControlledDefaultGuildsRestrictedV2 =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      let id1;
      const useControlledSetting2 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting;
      if (selectedTeen != null) {
        id1 = selectedTeen.id;
      }
      let controlledSetting2 = useControlledSetting2(id1);
      if (null == controlledSetting2) {
        controlledSetting2 = controlledSetting || controlledSetting;
      }
      return controlledSetting2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp7;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = useSelectedTeen;
      const selectedTeen = obj2.useSelectedTeen();
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      let id;
      const useControlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = useControlledSetting(id);
      if (cResult[0] !== controlledSetting) {
        const tmpResult = UserSettingsUtils;
        const flags = tmpResult.computeFlags(controlledSetting);
        cResult[0] = controlledSetting;
        cResult[1] = flags;
        tmp7 = flags;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7.mutualGuilds && !tmp7.all;
    }
  : () => {
      let controlledSetting;
      let obj = controlledSetting(8330);
      const selectedTeen = obj.useSelectedTeen();
      const ParentalControlledFriendSourceFlags = controlledSetting(14642).ParentalControlledFriendSourceFlags;
      let id;
      const useControlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      controlledSetting = useControlledSetting(id);
      const items = [controlledSetting];
      const memo = react.useMemo(() => {
        const obj = UserSettingsUtils;
        return obj.computeFlags(controlledSetting);
      }, items);
      return memo.mutualGuilds && !memo.all;
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const obj2 = require("useSelectedTeen");
      const selectedTeenId = obj2.useSelectedTeenId();
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterControlledSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        if (cResult[2] === selectedTeenId) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function o() {
        return FamilyCenterControlledSettingsStore.hasConsented(selectedTeenId, closure_0);
      };
      cResult[1] = arg0;
      cResult[2] = selectedTeenId;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const obj = require("useSelectedTeen");
      let closure_1 = obj.useSelectedTeenId();
      const items = [FamilyCenterControlledSettingsStore];
      const obj2 = require("get initialized");
      return obj2.useStateFromStores(items, () =>
        FamilyCenterControlledSettingsStore.hasConsented(closure_1, closure_0),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      let obj2 = require("useSelectedTeen");
      const selectedTeenId = obj2.useSelectedTeenId();
      if (cResult[0] === arg0) {
        let tmp3;
        if (cResult[1] === selectedTeenId) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      _require = _asyncToGenerator(async (arg0) => {
        let obj3;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            c5 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_1 = tmp;
                if (null != closure_1) {
                  let items1;
                  let items2;
                  if (closure_0) {
                    const items = [closure_0];
                    items1 = items;
                  } else {
                    items1 = [];
                  }
                  if (closure_0) {
                    items2 = [];
                  } else {
                    items2 = [closure_0];
                  }
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.updateTeenConsents(tmp23, items1, items2), done: false };
                  obj3 = selectedTeenId(dependencyMap[14]);
                  return obj6;
                }
              }
            } else if (1 === tmp4) {
              c4 = 0;
              const obj2 = selectedTeenId(dependencyMap[15]);
              obj2.showFailedToast(constants.GENERIC_ERROR);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp15) {
            let closure_3 = tmp15;
            if (0 === c4) {
              c5 = 3;
              throw tmp15;
            } else {
              c2 = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = arg0;
      cResult[1] = selectedTeenId;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0) => {
      _require = arg0;
      let obj = require("useSelectedTeen");
      const selectedTeenId = obj.useSelectedTeenId();
      const useCallback = react.useCallback;
      _require = _asyncToGenerator(async (arg0) => {
        let obj3;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            c5 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_1 = tmp;
                if (null != closure_1) {
                  let items1;
                  let items2;
                  if (closure_0) {
                    const items = [closure_0];
                    items1 = items;
                  } else {
                    items1 = [];
                  }
                  if (closure_0) {
                    items2 = [];
                  } else {
                    items2 = [closure_0];
                  }
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.updateTeenConsents(tmp23, items1, items2), done: false };
                  obj3 = selectedTeenId(dependencyMap[14]);
                  return obj6;
                }
              }
            } else if (1 === tmp4) {
              c4 = 0;
              const obj2 = selectedTeenId(dependencyMap[15]);
              obj2.showFailedToast(constants.GENERIC_ERROR);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp15) {
            let closure_3 = tmp15;
            if (0 === c4) {
              c5 = 3;
              throw tmp15;
            } else {
              c2 = 1;
            }
          }
        }
      });
      let items = [selectedTeenId, arg0];
      return useCallback(function () {
        return closure_0(...arguments);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp2 = closure_7(arg0);
      const tmp3 = closure_8(arg0);
      if (cResult[0] === tmp2) {
        let tmp4;
        if (cResult[1] === tmp3) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = { hasConsented: tmp2, updateConsent: tmp3 };
      cResult[0] = tmp2;
      cResult[1] = tmp3;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : (arg0) => {
      const obj = { hasConsented: closure_7(arg0), updateConsent: closure_8(arg0) };
      return obj;
    };
let fn = () => {
  const obj = useUserLinks;
  return obj.useHasActiveParentLinks();
};
const result1 = size.fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = tmp2;
export const useParentalControlledGoreContentSettings = tmp3;
export const useDefaultGuildsRestricted = tmp4;
export const useAllowFriendsFromMutualGuildsOnlyForTeen = tmp5;
export const useIsParentallyControlled = fn;
export const useParentalControlledConsent = tmp7;
