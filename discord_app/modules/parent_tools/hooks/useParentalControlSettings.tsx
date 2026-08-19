// === Module 14181: useParentalControlledExplicitContentSettings ===

// Module 14181 (useParentalControlledExplicitContentSettings)
import create from "create" /* 1306 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 5025 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import useSelectedTeen from "useSelectedTeen" /* 7623 */;
import result2 from "result" /* 14182 */;
import getGoreContentSettingOrDefault from "getGoreContentSettingOrDefault" /* 14185 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import getSettings from "getSettings" /* 5299 */;
import { SafetyToastType } from "SafetyToastType" /* 5430 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = result2.ParentalControlledExplicitContent;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
  let tmp6 = null;
  if (null != selectedTeen) {
    let tmpResult = getGoreContentSettingOrDefault;
    let id1;
    if (selectedTeen != null) {
      id1 = selectedTeen.id;
    }
    obj = { teenId: null, setting: null };
    obj[0] = id1;
    let prop;
    if (controlledSetting != null) {
      prop = controlledSetting.explicitContentNonFriendDm;
    }
    obj = { explicitContentNonFriendDm: null, explicitContentFriendDm: null, explicitContentGuilds: null };
    obj[1] = prop;
    obj[0] = tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj);
    tmpResult = getGoreContentSettingOrDefault;
    let id2;
    if (selectedTeen != null) {
      id2 = selectedTeen.id;
    }
    obj1 = { teenId: null, setting: null, isFriend: true };
    obj1[0] = id2;
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    obj1[1] = prop1;
    obj[1] = tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj1);
    obj[2] = create.ExplicitContentRedaction.BLUR;
    tmp6 = obj;
  }
  return tmp6;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledGoreContent = result2.ParentalControlledGoreContent;
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
    let tmpResult = getGoreContentSettingOrDefault;
    if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
      tmpResult = resolveGoreSettingWithDefaults;
      goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
    }
    obj = { goreContentNonFriendDm: null, goreContentFriendDm: null, goreContentGuilds: null };
    obj[0] = goreContentNonFriendDm;
    if (!tmpResult1.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = resolveGoreSettingWithDefaults.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
      const tmpResult2 = resolveGoreSettingWithDefaults;
    }
    obj[1] = goreContentFriendDm;
    obj[2] = create.ExplicitContentRedaction.BLUR;
    return obj;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const selectedTeen = useSelectedTeen.useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = result2.ParentalControlledDefaultGuildsRestricted;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = result2.ParentalControlledDefaultGuildsRestrictedV2;
  let id1;
  if (selectedTeen != null) {
    id1 = selectedTeen.id;
  }
  let controlledSetting1 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting(id1);
  if (null == controlledSetting1) {
    controlledSetting1 = controlledSetting || controlledSetting;
  }
  return controlledSetting1;
};
export const useAllowFriendsFromMutualGuildsOnlyForTeen = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
  const selectedTeen = controlledSetting(7623).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(14182).ParentalControlledFriendSourceFlags;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
  const items = [controlledSetting];
  const memo = React.useMemo(() => controlledSetting(dependencyMap[9]).computeFlags(controlledSetting), items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  return useUserIdsForLinkStatus.useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  let _require = PERSONALIZATION;
  let obj = _require(7623);
  obj.useSelectedTeenId();
  let items = [closure_5];
  _require = PERSONALIZATION;
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.hasConsented(selectedTeenId, closure_0));
  let obj2 = _require(589);
  const selectedTeenId = _require(7623).useSelectedTeenId();
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              if (null != closure_1_1) {
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
                selectedTeenId(dependencyMap[12]).updateTeenConsents(tmp29, items1, items2);
                c2 = 2;
                c5 = 1;
                const obj3 = selectedTeenId(dependencyMap[12]);
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              selectedTeenId(dependencyMap[13]).showFailedToast(SafetyToastType.GENERIC_ERROR);
              const obj2 = selectedTeenId(dependencyMap[13]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  let items1 = [selectedTeenId, PERSONALIZATION];
  obj = {
    hasConsented: stateFromStores,
    updateConsent: React.useCallback(function() {
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
  return obj;
};