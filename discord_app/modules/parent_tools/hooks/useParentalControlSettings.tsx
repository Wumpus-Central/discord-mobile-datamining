// discord_app/modules/parent_tools/hooks/useParentalControlSettings.tsx
import c from "../../../../_runtime/00576_c.js";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import useUserLinks from "useUserLinks.tsx";
import useSelectedTeen from "useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../user_settings/family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterControlledSettingsUtils from "../FamilyCenterControlledSettingsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterControlledSettingsStore from "../FamilyCenterControlledSettingsStore.tsx";

require = fn;
const SafetyToastType = fn(8108).SafetyToastType;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
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
          if (cResult[1] === prop) {
            let tmp9 = cResult[2];
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
            if (cResult[4] === prop1) {
              let tmp13 = cResult[5];
            }
            if (cResult[6] === tmp9) {
              if (cResult[7] === tmp13) {
                let tmp15 = cResult[8];
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
          const explicitContentSettingWithDefaultsForTeen =
            FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj4);
          cResult[3] = id2;
          cResult[4] = prop1;
          cResult[5] = explicitContentSettingWithDefaultsForTeen;
          tmp13 = explicitContentSettingWithDefaultsForTeen;
          const tmpResult = FamilyCenterControlledSettingsUtils;
        }
        const obj5 = { teenId: id1, setting: prop };
        const explicitContentSettingWithDefaultsForTeen1 =
          FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj5);
        cResult[0] = id1;
        cResult[1] = prop;
        cResult[2] = explicitContentSettingWithDefaultsForTeen1;
        tmp9 = explicitContentSettingWithDefaultsForTeen1;
        const tmpResult2 = FamilyCenterControlledSettingsUtils;
      }
    }
  : () => {
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
      let tmp6 = null;
      if (null != selectedTeen) {
        let id1;
        if (selectedTeen != null) {
          id1 = selectedTeen.id;
        }
        const obj2 = { teenId: id1, setting: null };
        let prop;
        if (controlledSetting != null) {
          prop = controlledSetting.explicitContentNonFriendDm;
        }
        const obj3 = { explicitContentNonFriendDm: null, explicitContentFriendDm: null, explicitContentGuilds: null };
        obj2.setting = prop;
        obj3.explicitContentNonFriendDm =
          FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj2);
        const tmpResult = FamilyCenterControlledSettingsUtils;
        let id2;
        if (selectedTeen != null) {
          id2 = selectedTeen.id;
        }
        const obj4 = { teenId: id2, setting: null, isFriend: true };
        let prop1;
        if (controlledSetting != null) {
          prop1 = controlledSetting.explicitContentFriendDm;
        }
        obj4.setting = prop1;
        obj3.explicitContentFriendDm =
          FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj4);
        obj3.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
        tmp6 = obj3;
        const tmpResult2 = FamilyCenterControlledSettingsUtils;
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledGoreContent.useControlledSetting(id);
      if (null == selectedTeen) {
        return null;
      } else {
        if (cResult[0] !== controlledSetting) {
          let obj3 = controlledSetting;
          if (controlledSetting == null) {
            obj3 = {};
          }
          cResult[0] = controlledSetting;
          cResult[1] = obj3;
          let tmp7 = obj3;
        } else {
          tmp7 = cResult[1];
        }
        ({ goreContentNonFriendDm, goreContentFriendDm } = tmp7);
        if (cResult[2] !== goreContentNonFriendDm) {
          let goreSettingWithDefaultsForTeen = goreContentNonFriendDm;
          if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
            goreSettingWithDefaultsForTeen =
              SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
            const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
          }
          cResult[2] = goreContentNonFriendDm;
          cResult[3] = goreSettingWithDefaultsForTeen;
          let tmp8 = goreSettingWithDefaultsForTeen;
          tmpResult = FamilyCenterControlledSettingsUtils;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== goreContentFriendDm) {
          let goreSettingWithDefaultsForTeen1 = goreContentFriendDm;
          if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
            goreSettingWithDefaultsForTeen1 =
              SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({
                isDm: true,
                isFriend: true,
              });
            const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
          }
          cResult[4] = goreContentFriendDm;
          cResult[5] = goreSettingWithDefaultsForTeen1;
          let tmp10 = goreSettingWithDefaultsForTeen1;
          tmpResult5 = FamilyCenterControlledSettingsUtils;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp8) {
          if (cResult[7] === tmp10) {
            let tmp12 = cResult[8];
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
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      let controlledSetting = ParentalControlledGoreContent.useControlledSetting(id);
      if (null == selectedTeen) {
        return null;
      } else {
        if (controlledSetting == null) {
          controlledSetting = {};
        }
        ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
        if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
          goreContentNonFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({
            isDm: true,
          });
          const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
        }
        const obj2 = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
        tmpResult = FamilyCenterControlledSettingsUtils;
        if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
          goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({
            isDm: true,
            isFriend: true,
          });
          const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
        }
        obj2.goreContentFriendDm = goreContentFriendDm;
        obj2.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
        return obj2;
      }
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledDefaultGuildsRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
      const ParentalControlledDefaultGuildsRestrictedV2 =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      let id1;
      if (selectedTeen != null) {
        id1 = selectedTeen.id;
      }
      let controlledSetting1 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting(id1);
      if (null == controlledSetting1) {
        controlledSetting1 = controlledSetting || controlledSetting;
        const tmp8 = controlledSetting || controlledSetting;
      }
      return controlledSetting1;
    }
  : () => {
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledDefaultGuildsRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
      const ParentalControlledDefaultGuildsRestrictedV2 =
        ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      let id1;
      if (selectedTeen != null) {
        id1 = selectedTeen.id;
      }
      let controlledSetting1 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting(id1);
      if (null == controlledSetting1) {
        controlledSetting1 = controlledSetting || controlledSetting;
        const tmp8 = controlledSetting || controlledSetting;
      }
      return controlledSetting1;
    };
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      const obj = require("c");
      const tmp = _require;
      const selectedTeenId = require("useSelectedTeen").useSelectedTeenId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterControlledSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === selectedTeenId) {
          let tmp7 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp7);
      }
      const fn = function o() {
        return FamilyCenterControlledSettingsStore.hasConsented(selectedTeenId, closure_0);
      };
      cResult[1] = arg0;
      cResult[2] = selectedTeenId;
      cResult[3] = fn;
      tmp7 = fn;
      const obj2 = require("useSelectedTeen");
    }
  : (arg0) => {
      _require = arg0;
      closure_1 = require("useSelectedTeen").useSelectedTeenId();
      const obj = require("useSelectedTeen");
      const items = [FamilyCenterControlledSettingsStore];
      return require("initialize").useStateFromStores(items, () =>
        FamilyCenterControlledSettingsStore.hasConsented(closure_1, closure_0),
      );
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      let obj = require("c");
      const selectedTeenId = require("useSelectedTeen").useSelectedTeenId();
      if (cResult[0] === arg0) {
        if (cResult[1] === selectedTeenId) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      _require = asyncGeneratorStep(async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
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
                closure_1 = tmp3;
                if (null != closure_1) {
                  if (closure_0) {
                    const items = [closure_0];
                    let items1 = items;
                  } else {
                    items1 = [];
                  }
                  if (closure_0) {
                    let items2 = [];
                  } else {
                    items2 = [closure_0];
                  }
                  c4 = 1;
                  selectedTeenId(7063).updateTeenConsents(tmp28, items1, items2);
                  c2 = 2;
                  c5 = 1;
                  const obj3 = selectedTeenId(7063);
                }
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                selectedTeenId(8113).showFailedToast(constants.GENERIC_ERROR);
                const obj2 = selectedTeenId(8113);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c5 = 3;
          } catch (tmp19) {
            closure_3 = tmp19;
            if (tmp4 === c4) {
              c5 = tmp2;
              throw tmp19;
            } else {
              c2 = tmp;
            }
          }
        }
      });
      const fn = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[0] = arg0;
      cResult[1] = selectedTeenId;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0) => {
      _require = arg0;
      const selectedTeenId = require("useSelectedTeen").useSelectedTeenId();
      _require = asyncGeneratorStep(async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
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
                closure_1 = tmp3;
                if (null != closure_1) {
                  if (closure_0) {
                    const items = [closure_0];
                    let items1 = items;
                  } else {
                    items1 = [];
                  }
                  if (closure_0) {
                    let items2 = [];
                  } else {
                    items2 = [closure_0];
                  }
                  c4 = 1;
                  selectedTeenId(7063).updateTeenConsents(tmp28, items1, items2);
                  c2 = 2;
                  c5 = 1;
                  const obj3 = selectedTeenId(7063);
                }
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                selectedTeenId(8113).showFailedToast(constants.GENERIC_ERROR);
                const obj2 = selectedTeenId(8113);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c5 = 3;
          } catch (tmp19) {
            closure_3 = tmp19;
            if (tmp4 === c4) {
              c5 = tmp2;
              throw tmp19;
            } else {
              c2 = tmp;
            }
          }
        }
      });
      let items = [selectedTeenId, arg0];
      return noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items);
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const selectedTeen = useSelectedTeen.useSelectedTeen();
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
      if (cResult[0] !== controlledSetting) {
        const flags = UserSettingsUtils.computeFlags(controlledSetting);
        cResult[0] = controlledSetting;
        cResult[1] = flags;
        let tmp7 = flags;
        const tmpResult = UserSettingsUtils;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7.mutualGuilds && !tmp7.all;
    }
  : () => {
      const selectedTeen = controlledSetting(8330).useSelectedTeen();
      const ParentalControlledFriendSourceFlags = controlledSetting(14642).ParentalControlledFriendSourceFlags;
      let id;
      if (selectedTeen != null) {
        id = selectedTeen.id;
      }
      controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
      const items = [controlledSetting];
      const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items);
      return memo.mutualGuilds && !memo.all;
    };
fn = () => useUserLinks.useHasActiveParentLinks();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = tmp2;
export const useParentalControlledGoreContentSettings = tmp3;
export const useDefaultGuildsRestricted = tmp4;
export const useAllowFriendsFromMutualGuildsOnlyForTeen = tmp5;
export const useIsParentallyControlled = fn;
export const useParentalControlledConsent = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      const tmp2 = closure_7(arg0);
      const tmp3 = closure_8(arg0);
      if (cResult[0] === tmp2) {
        if (cResult[1] === tmp3) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = { hasConsented: tmp2, updateConsent: tmp3 };
      cResult[0] = tmp2;
      cResult[1] = tmp3;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : (arg0) => ({ hasConsented: closure_7(arg0), updateConsent: closure_8(arg0) });
