// discord_app/modules/badges/PendingBadgeSettings.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeIdResolution from "BadgeIdResolution.tsx";
import BadgeUtils from "BadgeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserStore from "../../stores/UserStore.tsx";
import BadgeDirectoryStore from "BadgeDirectoryStore.tsx";

require = fn;
function getSavedBadgeSettings() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    if (BadgeDirectoryStore.hasCatalogFor(id)) {
      const items = [];
      const _Set = Set;
      const set = new Set();
      const badges = obj4.getBadges(id);
      for (const item10020 of badges) {
        let tmp10 = item10020;
        let obj2 = BadgeUtils;
        if (!obj2.isPinnedBadge(item10020.badge_id)) {
          if (tmp10.owned) {
            if (tmp10.hidden) {
              let addResult = set.add(tmp10.badge_id);
            } else {
              let arr = items.push(tmp10.badge_id);
            }
          }
        }
        continue;
      }
      const obj = { displayOrder: items, hiddenBadges: set };
      return obj;
    }
    obj4 = BadgeDirectoryStore;
  }
  return null;
}
function applyPendingBadgeSettingsToProfileBadges(items, arg1) {
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  let set;
  if (null == pendingBadgeDisplayOrder) {
    if (null == pendingBadgeHiddenBadges) {
      items = [];
      HermesBuiltin.arraySpread(items, 0);
      return items;
    }
  }
  set = null;
  if (null != pendingBadgeHiddenBadges) {
    const _Set = Set;
    set = new Set(pendingBadgeHiddenBadges);
  }
  if (null == set) {
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    let found = items1;
  } else {
    found = items.filter((id) => {
      const profileBadgeId = BadgeIdResolution.resolveProfileBadgeId(id.id);
      let isPinnedBadgeResult = null == profileBadgeId;
      if (!isPinnedBadgeResult) {
        isPinnedBadgeResult = BadgeUtils.isPinnedBadge(profileBadgeId);
        const tmpResult = BadgeUtils;
      }
      if (!isPinnedBadgeResult) {
        isPinnedBadgeResult = !set.has(profileBadgeId);
      }
      return isPinnedBadgeResult;
    });
  }
  if (null == pendingBadgeDisplayOrder) {
    return found;
  } else {
    const items2 = [];
    const _Map = Map;
    const map = new Map();
    for (const item10027 of found) {
      let tmp11 = item10027;
      let tmp12 = set;
      let obj = set(8193);
      let profileBadgeId = obj.resolveProfileBadgeId(item10027.id);
      let tmp15 = profileBadgeId;
      if (null != profileBadgeId) {
        let tmp12Result = tmp12(11199);
        if (!tmp12Result.isPinnedBadge(tmp15)) {
          if (!map.has(tmp15)) {
            let result = map.set(tmp15, tmp11);
          }
          continue;
        }
      }
      let arr = items2.push(tmp11);
    }
    const items3 = [];
    for (const item10058 of pendingBadgeDisplayOrder) {
      let tmp25 = item10058;
      value = map.get(item10058);
      if (null != value) {
        arr = items3.push(tmp27);
        let deleteResult = map.delete(tmp25);
      }
      continue;
    }
    const items4 = [];
    HermesBuiltin.arraySpread(map.values(), HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items2, 0)));
    return items4;
  }
}
function moveBadgeInDisplayOrder(value, index, clampResult) {
  if (index !== clampResult) {
    if (index >= 0) {
      if (index < value.length) {
        const items = [];
        HermesBuiltin.arraySpread(value, 0);
        const _Math = Math;
        const _Math2 = Math;
        items.splice(Math.min(Math.max(clampResult, 0), items.length), 0, _slicedToArray(items.splice(index, 1), 1)[0]);
        return items;
      }
    }
  }
  return value;
}
moveBadgeInDisplayOrder.__closure = {};
moveBadgeInDisplayOrder.__workletHash = 15133920248237;
moveBadgeInDisplayOrder.__initData = {
  code: "function moveBadgeInDisplayOrder_PendingBadgeSettingsTsx1(badgeIds,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=badgeIds.length){return badgeIds;}const next=[...badgeIds];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/PendingBadgeSettings.tsx");

export const setPendingBadgeDisplayOrder = function setPendingBadgeDisplayOrder(arr) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const displayOrder = tmp.displayOrder;
    tmp2 = arr.length === displayOrder.length && arr.every((item, index) => item === hiddenBadges[index]);
    const tmp3 = arr.length === displayOrder.length && arr.every((item, index) => item === hiddenBadges[index]);
  }
  let tmp4;
  if (!tmp2) {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    tmp4 = items;
  }
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp4 });
};
export const setPendingBadgeHiddenBadges = function setPendingBadgeHiddenBadges(arr) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const hiddenBadges = tmp.hiddenBadges;
    tmp2 = arr.length === hiddenBadges.size && arr.every((item) => hiddenBadges.has(item));
    const tmp3 = arr.length === hiddenBadges.size && arr.every((item) => hiddenBadges.has(item));
  }
  let tmp4;
  if (!tmp2) {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    tmp4 = items;
  }
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeHiddenBadges: tmp4 });
};
export const setPendingBadgeVisibility = function setPendingBadgeVisibility(badgeId) {
  badgeId = badgeId.badgeId;
  let hiddenBadges = badgeId;
  ({ hidden, reorderableBadgeIds, hiddenBadgeIds } = badgeId);
  if (badgeId.canReorder) {
    if (hidden) {
      let found = reorderableBadgeIds.filter((item) => item !== hiddenBadges);
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(reorderableBadgeIds, 0)] = badgeId;
      found = items;
    }
    const tmp4 = getSavedBadgeSettings();
    let tmp6 = null != tmp4;
    if (tmp6) {
      const displayOrder = tmp4.displayOrder;
      hiddenBadges = displayOrder;
      tmp6 = found.length === displayOrder.length && found.every((item, index) => item === hiddenBadges[index]);
      const tmp7 = found.length === displayOrder.length && found.every((item, index) => item === hiddenBadges[index]);
    }
    let obj = DispatcherDefault;
    let tmp10;
    if (!tmp6) {
      const items1 = [];
      HermesBuiltin.arraySpread(found, 0);
      tmp10 = items1;
    }
    obj = { type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp10 };
    obj.dispatch(obj);
  }
  if (hidden) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(hiddenBadgeIds, 0)] = badgeId;
    let found1 = items2;
  } else {
    found1 = hiddenBadgeIds.filter((item) => item !== hiddenBadges);
  }
  const tmp17 = getSavedBadgeSettings();
  let tmp18 = null != tmp17;
  if (tmp18) {
    hiddenBadges = tmp17.hiddenBadges;
    tmp18 = found1.length === hiddenBadges.size && found1.every((item) => hiddenBadges.has(item));
    const tmp19 = found1.length === hiddenBadges.size && found1.every((item) => hiddenBadges.has(item));
  }
  let tmp20;
  if (!tmp18) {
    const items3 = [];
    HermesBuiltin.arraySpread(found1, 0);
    tmp20 = items3;
  }
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeHiddenBadges: tmp20 });
};
export const resetPendingBadgeSettings = function resetPendingBadgeSettings() {
  DispatcherDefault.dispatch({
    type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
    pendingBadgeDisplayOrder: "call",
    pendingBadgeHiddenBadges: "ct",
  });
};
export const hasPendingBadgeSettings = function hasPendingBadgeSettings(pendingBadgeDisplayOrder) {
  return (
    undefined !== pendingBadgeDisplayOrder.pendingBadgeDisplayOrder ||
    undefined !== pendingBadgeDisplayOrder.pendingBadgeHiddenBadges
  );
};
export const applyPendingBadgeSettings = function applyPendingBadgeSettings(stateFromStoresArray, arg1) {
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  let set = null;
  if (null != pendingBadgeHiddenBadges) {
    const _Set = Set;
    set = new Set(pendingBadgeHiddenBadges);
  }
  if (null == set) {
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(stateFromStoresArray, 0);
    let mapped = items;
  } else {
    mapped = stateFromStoresArray.map((badge_id) => {
      let obj = BadgeUtils;
      let tmp = badge_id;
      if (!obj.isPinnedBadge(badge_id.badge_id)) {
        obj = {};
        const merged = Object.assign(badge_id);
        obj.hidden = set.has(badge_id.badge_id);
        tmp = obj;
      }
      return tmp;
    });
  }
  if (null == pendingBadgeDisplayOrder) {
    return mapped;
  } else {
    const items1 = [];
    const _Map = Map;
    const map = new Map();
    for (const item10026 of mapped) {
      let tmp11 = item10026;
      let obj = set(11199);
      if (obj.isPinnedBadge(item10026.badge_id)) {
        let arr = items1.push(tmp11);
      } else {
        let result = map.set(tmp11.badge_id, tmp11);
      }
      continue;
    }
    const items2 = [];
    for (const item10048 of pendingBadgeDisplayOrder) {
      let tmp20 = item10048;
      value = map.get(item10048);
      if (null != value) {
        arr = items2.push(tmp22);
        let deleteResult = map.delete(tmp20);
      }
      continue;
    }
    const items3 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items1, 0));
    HermesBuiltin.arraySpread(map.values(), arraySpreadResult);
    return items3;
  }
};
export const getPendingProfileBadges = function getPendingProfileBadges(arr, arr2, arg2) {
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg2);
  if (null == pendingBadgeHiddenBadges) {
    return applyPendingBadgeSettingsToProfileBadges(arr, arg2);
  } else {
    const _Set = Set;
    const set = new Set(arr.map((id) => set(set2[5]).resolveProfileBadgeId(id.id)));
    const _Set2 = Set;
    const set1 = new Set(pendingBadgeHiddenBadges);
    if (pendingBadgeDisplayOrder == null) {
      pendingBadgeDisplayOrder = [];
    }
    const set2 = new Set(pendingBadgeDisplayOrder);
    const found = arr2.filter((owned) => {
      owned = owned.owned;
      if (owned) {
        owned = owned.badge_id !== BadgeId.BadgeId.LEGACY_USERNAME;
      }
      if (owned) {
        let flag = owned.hidden;
        if (flag == null) {
          flag = false;
        }
        if (!flag) {
          flag = set2.has(owned.badge_id);
        }
        owned = flag;
      }
      if (owned) {
        owned = !set1.has(owned.badge_id);
      }
      if (owned) {
        owned = !set.has(owned.badge_id);
      }
      return owned;
    });
    const mapped = found.map((badge_id) => {
      let obj = set(set2[5]);
      const result = obj.toProfileBadgeLegacyId(badge_id.badge_id);
      obj = { id: result, icon: result, iconSrc: badge_id.simple_icon_url, description: badge_id.name };
      return obj;
    });
    const items = [];
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(arr, 0));
    return applyPendingBadgeSettingsToProfileBadges(items, arg2);
  }
};
export { applyPendingBadgeSettingsToProfileBadges };
export { moveBadgeInDisplayOrder };
