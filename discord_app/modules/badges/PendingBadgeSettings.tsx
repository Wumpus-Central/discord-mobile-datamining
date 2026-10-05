// === Module 12923: PendingBadgeSettings ===

// Module 12923 (PendingBadgeSettings)
import DispatcherDefault from "Dispatcher" /* 584 */;
import BadgeIdResolution from "BadgeIdResolution" /* 7864 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1377 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import size from "module_2" /* 2 */;

let map, owned, set;

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
      const self = this;
      const self2 = this;
      set = new Set();
      const badges = BadgeDirectoryStore.getBadges(id);
      for (const item10020 of badges) {
        let obj2 = BadgeUtils;
        if (!obj2.isPinnedBadge(item10020.badge_id)) {
          if (item10020.owned) {
            if (item10020.hidden) {
              let addResult = set.add(item10020.badge_id);
            } else {
              let arr = items.push(item10020.badge_id);
            }
          }
        }
        continue;
      }
      return { displayOrder: items, hiddenBadges: set };
    }
  }
  return null;
}
function applyPendingBadgeSettingsToProfileBadges(items, arg1) {
  let found;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  set = undefined;
  if (null == pendingBadgeDisplayOrder) {
    if (null == pendingBadgeHiddenBadges) {
      items = [];
      HermesBuiltin.arraySpread(items, items, 0);
      return items;
    }
  }
  set = null;
  if (null != pendingBadgeHiddenBadges) {
    const _Set = Set;
    const self2 = this;
    const self = this;
    set = new Set(pendingBadgeHiddenBadges);
  }
  if (null == set) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, items, 0);
    found = items1;
  } else {
    found = items.filter((id) => {
      const obj = BadgeIdResolution;
      const profileBadgeId = obj.resolveProfileBadgeId(id.id);
      let isPinnedBadgeResult = null == profileBadgeId;
      if (!isPinnedBadgeResult) {
        const tmpResult = BadgeUtils;
        isPinnedBadgeResult = tmpResult.isPinnedBadge(profileBadgeId);
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
    const self3 = this;
    const self4 = this;
    map = new Map();
    for (const item10027 of found) {
      let tmp11 = set;
      let obj = set(7864);
      let profileBadgeId = obj.resolveProfileBadgeId(item10027.id);
      let tmp14 = profileBadgeId;
      if (null != profileBadgeId) {
        let tmp11Result = tmp11(10889);
        if (!tmp11Result.isPinnedBadge(tmp14)) {
          if (!map.has(tmp14)) {
            let result = map.set(tmp14, item10027);
          }
          continue;
        }
      }
      let arr = items2.push(item10027);
    }
    const items3 = [];
    for (const item10058 of pendingBadgeDisplayOrder) {
      let value = map.get(item10058);
      if (null != value) {
        let arr2 = items3.push(tmp26);
        let deleteResult = map.delete(item10058);
      }
      continue;
    }
    const items4 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items4, items3, HermesBuiltin.arraySpread(items4, items2, 0));
    HermesBuiltin.arraySpread(items4, map.values(), arraySpreadResult5);
    return items4;
  }
}
function moveBadgeInDisplayOrder(value, index, clampResult) {
  if (index !== clampResult) {
    if (index >= 0) {
      if (index < value.length) {
        const items = [];
        HermesBuiltin.arraySpread(items, value, 0);
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
moveBadgeInDisplayOrder.__initData = { code: "function moveBadgeInDisplayOrder_PendingBadgeSettingsTsx1(badgeIds,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=badgeIds.length){return badgeIds;}const next=[...badgeIds];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;}" };
let result = size.fileFinishedImporting("modules/badges/PendingBadgeSettings.tsx");

export const setPendingBadgeDisplayOrder = function setPendingBadgeDisplayOrder(arr) {
  const tmp2 = getSavedBadgeSettings();
  let tmp3 = null != tmp2;
  if (tmp3) {
    const displayOrder = tmp2.displayOrder;
    tmp3 = arr.length === displayOrder.length && arr.every((item, index) => item === displayOrder[index]);
    arr.length === displayOrder.length && arr.every((item, index) => item === displayOrder[index]);
  }
  let tmp6;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (!tmp3) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    tmp6 = items;
  }
  dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp6 });
};
export const setPendingBadgeHiddenBadges = function setPendingBadgeHiddenBadges(arr) {
  const tmp2 = getSavedBadgeSettings();
  let tmp3 = null != tmp2;
  if (tmp3) {
    const hiddenBadges = tmp2.hiddenBadges;
    tmp3 = arr.length === hiddenBadges.size && arr.every((item) => hiddenBadges.has(item));
    arr.length === hiddenBadges.size && arr.every((item) => hiddenBadges.has(item));
  }
  let tmp6;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (!tmp3) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    tmp6 = items;
  }
  dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeHiddenBadges: tmp6 });
};
export const setPendingBadgeVisibility = function setPendingBadgeVisibility(badgeId) {
  let found1;
  let hidden;
  let hiddenBadgeIds;
  let reorderableBadgeIds;
  badgeId = badgeId.badgeId;
  ({ hidden, reorderableBadgeIds, hiddenBadgeIds } = badgeId);
  if (badgeId.canReorder) {
    let found;
    if (hidden) {
      found = reorderableBadgeIds.filter((item) => item !== badgeId);
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(items, reorderableBadgeIds, 0)] = badgeId;
      found = items;
    }
    const tmp5 = getSavedBadgeSettings();
    let tmp7 = null != tmp5;
    if (tmp7) {
      const displayOrder = tmp5.displayOrder;
      tmp7 = found.length === displayOrder.length && found.every((item, index) => item === displayOrder[index]);
      found.length === displayOrder.length && found.every((item, index) => item === displayOrder[index]);
    }
    let tmp12;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (!tmp7) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, found, 0);
      tmp12 = items1;
    }
    const obj = { type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp12 };
    dispatch(obj);
  }
  if (hidden) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, hiddenBadgeIds, 0)] = badgeId;
    found1 = items2;
  } else {
    found1 = hiddenBadgeIds.filter((item) => item !== badgeId);
  }
  const tmp19 = getSavedBadgeSettings();
  let tmp20 = null != tmp19;
  if (tmp20) {
    const hiddenBadges = tmp19.hiddenBadges;
    tmp20 = found1.length === hiddenBadges.size && found1.every((item) => hiddenBadges.has(item));
    found1.length === hiddenBadges.size && found1.every((item) => hiddenBadges.has(item));
  }
  let tmp23;
  const dispatch2 = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (!tmp20) {
    const items3 = [];
    HermesBuiltin.arraySpread(items3, found1, 0);
    tmp23 = items3;
  }
  dispatch2({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeHiddenBadges: tmp23 });
};
export const resetPendingBadgeSettings = function resetPendingBadgeSettings() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: "unicodeVersion", pendingBadgeHiddenBadges: "Symbol" });
};
export const hasPendingBadgeSettings = function hasPendingBadgeSettings(pendingBadgeDisplayOrder) {
  return undefined !== pendingBadgeDisplayOrder.pendingBadgeDisplayOrder || undefined !== pendingBadgeDisplayOrder.pendingBadgeHiddenBadges;
};
export const applyPendingBadgeSettings = function applyPendingBadgeSettings(stateFromStoresArray, arg1) {
  let mapped;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  set = null;
  if (null != pendingBadgeHiddenBadges) {
    const _Set = Set;
    const self2 = this;
    const self = this;
    set = new Set(pendingBadgeHiddenBadges);
  }
  if (null == set) {
    const items = [];
    HermesBuiltin.arraySpread(items, stateFromStoresArray, 0);
    mapped = items;
  } else {
    mapped = stateFromStoresArray.map((badge_id) => {
      let tmp = badge_id;
      const obj = BadgeUtils;
      if (!obj.isPinnedBadge(badge_id.badge_id)) {
        const obj2 = { hidden: set.has(badge_id.badge_id) };
        const merged = Object.assign(badge_id);
        tmp = obj2;
      }
      return tmp;
    });
  }
  if (null == pendingBadgeDisplayOrder) {
    return mapped;
  } else {
    const items1 = [];
    const _Map = Map;
    const self3 = this;
    const self4 = this;
    map = new Map();
    for (const item10026 of mapped) {
      let obj = set(10889);
      if (obj.isPinnedBadge(item10026.badge_id)) {
        let arr = items1.push(item10026);
      } else {
        let result = map.set(item10026.badge_id, item10026);
      }
      continue;
    }
    const items2 = [];
    for (const item10048 of pendingBadgeDisplayOrder) {
      let value = map.get(item10048);
      if (null != value) {
        let arr2 = items2.push(tmp20);
        let deleteResult = map.delete(item10048);
      }
      continue;
    }
    const items3 = [];
    const arraySpreadResult3 = HermesBuiltin.arraySpread(items3, items2, HermesBuiltin.arraySpread(items3, items1, 0));
    HermesBuiltin.arraySpread(items3, map.values(), arraySpreadResult3);
    return items3;
  }
};
export const getPendingProfileBadges = function getPendingProfileBadges(arr, stateFromStoresArray, arg2) {
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg2);
  if (null == pendingBadgeHiddenBadges) {
    return applyPendingBadgeSettingsToProfileBadges(arr, arg2);
  } else {
    const _Set = Set;
    const self3 = this;
    const self4 = this;
    set = new Set(arr.map((id) => {
      const obj = set(_Set31[5]);
      return obj.resolveProfileBadgeId(id.id);
    }));
    const _Set2 = Set;
    const self5 = this;
    const self6 = this;
    const set1 = new Set(pendingBadgeHiddenBadges);
    const _Set3 = Set;
    if (pendingBadgeDisplayOrder == null) {
      pendingBadgeDisplayOrder = [];
    }
    const self = this;
    const self2 = this;
    const _Set31 = new _Set3(pendingBadgeDisplayOrder);
    const found = stateFromStoresArray.filter((owned) => {
      owned = owned.owned;
      if (owned) {
        let flag = owned.hidden;
        if (flag == null) {
          flag = false;
        }
        if (!flag) {
          flag = _Set31.has(owned.badge_id);
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
      const obj = set(_Set31[5]);
      const result = obj.toProfileBadgeLegacyId(badge_id.badge_id);
      return { id: result, icon: result, iconSrc: badge_id.simple_icon_raster_url, description: badge_id.name };
    });
    const items = [];
    HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, arr, 0));
    return applyPendingBadgeSettingsToProfileBadges(items, arg2);
  }
};
export { applyPendingBadgeSettingsToProfileBadges };
export { moveBadgeInDisplayOrder };