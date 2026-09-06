// discord_app/modules/parent_tools/hooks/useParentalControlSettings.tsx
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
const SafetyToastType = fn(8399).SafetyToastType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
  let tmp6 = null;
  if (null != selectedTeen) {
    let tmpResult = FamilyCenterControlledSettingsUtils;
    let id1;
    if (selectedTeen != null) {
      id1 = selectedTeen.id;
    }
    obj = { teenId: id1, setting: null };
    let prop;
    if (controlledSetting != null) {
      prop = controlledSetting.explicitContentNonFriendDm;
    }
    obj = {
      explicitContentNonFriendDm: null,
      explicitContentFriendDm: null,
      explicitContentGuilds: null,
      setting: prop,
    };
    obj.explicitContentNonFriendDm = tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj);
    tmpResult = FamilyCenterControlledSettingsUtils;
    let id2;
    if (selectedTeen != null) {
      id2 = selectedTeen.id;
    }
    const obj1 = { teenId: id2, setting: null, isFriend: true };
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    obj1.setting = prop1;
    obj.explicitContentFriendDm = tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj1);
    obj.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    tmp6 = obj;
  }
  return tmp6;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
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
    let tmpResult = FamilyCenterControlledSettingsUtils;
    if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
      tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
      goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
    }
    obj = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
    if (!tmpResult1.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({
        isDm: true,
        isFriend: true,
      });
      const tmpResult2 = SensitiveMediaGoreRedactionSettingsUtils;
    }
    obj.goreContentFriendDm = goreContentFriendDm;
    obj.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    return obj;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
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
export const useAllowFriendsFromMutualGuildsOnlyForTeen = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
  const selectedTeen = controlledSetting(8647).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(14825).ParentalControlledFriendSourceFlags;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
  const items = [controlledSetting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  return useUserLinks.useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  _require = PERSONALIZATION;
  let obj = require("useSelectedTeen");
  closure_1 = obj.useSelectedTeenId();
  let items = [FamilyCenterControlledSettingsStore];
  closure_129_0 = PERSONALIZATION;
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    FamilyCenterControlledSettingsStore.hasConsented(closure_1, closure_0),
  );
  let obj2 = require("initialize");
  const selectedTeenId = require("useSelectedTeen").useSelectedTeenId();
  closure_129_1 = selectedTeenId;
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else if (null != tmp3) {
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
            tmp3(7539).updateTeenConsents(tmp28, items1, items2);
            c2 = 2;
            c5 = 1;
            const obj3 = tmp3(7539);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            tmp3(8404).showFailedToast(constants.GENERIC_ERROR);
            const obj2 = tmp3(8404);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 0;
          }
          c4 = 0;
          c5 = 3;
          obj = { value, done: true };
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
  let items1 = [selectedTeenId, PERSONALIZATION];
  obj = {
    hasConsented: stateFromStores,
    updateConsent: noop.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1),
  };
  return obj;
};
