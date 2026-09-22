// === Module 15109: useParentalControlSettings ===

// Module 15109 (useParentalControlSettings)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7242 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7545 */;
import useUserLinks from "useUserLinks" /* 8928 */;
import useSelectedTeen from "useSelectedTeen" /* 8930 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15110 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15113 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7785 */;

const require = globalThis.__r;

require = fn;
const SafetyToastType = fn(8674).SafetyToastType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
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
    obj3.explicitContentNonFriendDm = FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj2);
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
    obj3.explicitContentFriendDm = FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen(obj4);
    obj3.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    tmp6 = obj3;
    const tmpResult2 = FamilyCenterControlledSettingsUtils;
  }
  return tmp6;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
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
      goreContentNonFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
      const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
    }
    const obj2 = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
    tmpResult = FamilyCenterControlledSettingsUtils;
    if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
      const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
    }
    obj2.goreContentFriendDm = goreContentFriendDm;
    obj2.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    return obj2;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const selectedTeen = useSelectedTeen.useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
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
  const selectedTeen = controlledSetting(8930).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(15110).ParentalControlledFriendSourceFlags;
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
  closure_1 = require("useSelectedTeen").useSelectedTeenId();
  let obj = require("useSelectedTeen");
  let items = [FamilyCenterControlledSettingsStore];
  closure_129_0 = PERSONALIZATION;
  const stateFromStores = require("initialize").useStateFromStores(items, () => FamilyCenterControlledSettingsStore.hasConsented(closure_1, closure_0));
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
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
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
            tmp3(7784).updateTeenConsents(tmp28, items1, items2);
            c2 = 2;
            c5 = 1;
            const obj3 = tmp3(7784);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            tmp3(8679).showFailedToast(constants.GENERIC_ERROR);
            const obj2 = tmp3(8679);
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
  let items1 = [selectedTeenId, PERSONALIZATION];
  let obj3 = require("useSelectedTeen");
  return {
    hasConsented: stateFromStores,
    updateConsent: noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1)
  };
};