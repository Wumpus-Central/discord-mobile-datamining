import result from "result";
import noop from "noop";
import getSettings from "getSettings";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
const result = require("getSettings").fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj = require(7261) /* useSelectedTeen */;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = require(13976) /* result */.ParentalControlledExplicitContent;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
  let tmp6 = null;
  if (null != selectedTeen) {
    let tmpResult = tmp(13979);
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
    tmpResult = tmp(13979);
    let id2;
    if (selectedTeen != null) {
      id2 = selectedTeen.id;
    }
    const obj1 = { teenId: null, setting: null, isFriend: true };
    obj1[0] = id2;
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    obj1[1] = prop1;
    obj[1] = tmpResult.resolveExplicitContentSettingWithDefaultsForTeen(obj1);
    obj[2] = tmp(1306).ExplicitContentRedaction.BLUR;
    tmp6 = obj;
  }
  return tmp6;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  let obj = require(7261) /* useSelectedTeen */;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledGoreContent = require(13976) /* result */.ParentalControlledGoreContent;
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
    let tmpResult = tmp(13979);
    if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
      tmpResult = tmp(5826);
      goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
    }
    obj = { goreContentNonFriendDm: null, goreContentFriendDm: null, goreContentGuilds: null };
    obj[0] = goreContentNonFriendDm;
    if (!tmpResult1.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = tmp(5826).resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
      const tmpResult2 = tmp(5826);
    }
    obj[1] = goreContentFriendDm;
    obj[2] = tmp(1306).ExplicitContentRedaction.BLUR;
    return obj;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const selectedTeen = require(7261) /* useSelectedTeen */.useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = require(13976) /* result */.ParentalControlledDefaultGuildsRestricted;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = require(13976) /* result */.ParentalControlledDefaultGuildsRestrictedV2;
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
  const selectedTeen = controlledSetting(7261).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(13976).ParentalControlledFriendSourceFlags;
  let id;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
  const items = [controlledSetting];
  const memo = React.useMemo(() => controlledSetting(outer1_2[9]).computeFlags(controlledSetting), items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  return require(7259) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  let _require = PERSONALIZATION;
  let obj = _require(7261);
  let selectedTeenId = obj.useSelectedTeenId();
  let items = [getSettings];
  _require = PERSONALIZATION;
  selectedTeenId = undefined;
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_5.hasConsented(selectedTeenId, closure_0));
  let obj2 = _require(589);
  selectedTeenId = _require(7261).useSelectedTeenId();
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c5 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_1 = tmp3;
              if (null != outer1_1) {
                if (tmp28) {
                  const items = [closure_0];
                  let items1 = items;
                } else {
                  items1 = [];
                }
                if (tmp28) {
                  let items2 = [];
                } else {
                  items2 = [closure_0];
                }
                let c4 = 1;
                selectedTeenId(outer2_2[12]).updateTeenConsents(tmp29, items1, items2);
                c2 = 2;
                c5 = 1;
                const obj3 = selectedTeenId(outer2_2[12]);
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              selectedTeenId(outer2_2[13]).showFailedToast(outer2_6.GENERIC_ERROR);
              const obj2 = selectedTeenId(outer2_2[13]);
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
          let result = tmp19;
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