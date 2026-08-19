// === Module 14021: getSavedBadgeSettings ===

// Module 14021 (getSavedBadgeSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import set2 from "set" /* 14022 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import initialize from "initialize" /* 8936 */;

require = fn;
function getSavedBadgeSettings() {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    if (closure_5.hasCatalogFor(id)) {
      const items = [];
      const _Set = Set;
      const set = new Set();
      const badges = closure_5.getBadges(id);
      for (const item10020 of badges) {
        let NON_CUSTOMIZABLE_BADGE_IDS = set2.NON_CUSTOMIZABLE_BADGE_IDS;
        if (!NON_CUSTOMIZABLE_BADGE_IDS.has(item10020.badge_id)) {
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
      const obj = { displayOrder: null, hiddenBadges: null };
      obj[0] = items;
      obj[1] = set;
      return obj;
    }
  }
  return null;
}
function moveBadgeInDisplayOrder(value, index, clampResult) {
  if (index !== clampResult) {
    if (index >= 0) {
      if (index < value.length) {
        const items = [];
        HermesBuiltin.arraySpread(value, 0);
        const _Math = Math;
        const _Math2 = Math;
        items.splice(Math.min(Math.max(clampResult, 0), items.length), 0, callback(items.splice(index, 1), 1)[0]);
        return items;
      }
    }
  }
  return value;
}
moveBadgeInDisplayOrder.__closure = {};
moveBadgeInDisplayOrder.__workletHash = 15133920248237;
moveBadgeInDisplayOrder.__initData = { code: "function moveBadgeInDisplayOrder_PendingBadgeSettingsTsx1(badgeIds,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=badgeIds.length){return badgeIds;}const next=[...badgeIds];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;}" };
let result = require("obj132").fileFinishedImporting("modules/badges/PendingBadgeSettings.tsx");

export const setPendingBadgeDisplayOrder = function setPendingBadgeDisplayOrder(arr) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const displayOrder = tmp.displayOrder;
    tmp2 = arr.length === displayOrder.length && arr.every((item, index) => item === displayOrder[index]);
    const tmp3 = arr.length === displayOrder.length && arr.every((item, index) => item === displayOrder[index]);
  }
  let tmp4;
  if (!tmp2) {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    tmp4 = items;
  }
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp4 });
};
export const setPendingBadgeHiddenBadges = function setPendingBadgeHiddenBadges(items) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const hiddenBadges = tmp.hiddenBadges;
    tmp2 = items.length === hiddenBadges.size && items.every((item, index) => hiddenBadges.has(item));
    const tmp3 = items.length === hiddenBadges.size && items.every((item, index) => hiddenBadges.has(item));
  }
  let tmp4;
  if (!tmp2) {
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    tmp4 = items;
  }
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeHiddenBadges: tmp4 });
};
export const resetPendingBadgeSettings = function resetPendingBadgeSettings() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: "accessible", pendingBadgeHiddenBadges: "height" });
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
    mapped = stateFromStoresArray.map((item, index) => {
      const NON_CUSTOMIZABLE_BADGE_IDS = set(dependencyMap[3]).NON_CUSTOMIZABLE_BADGE_IDS;
      let tmp = item;
      if (!NON_CUSTOMIZABLE_BADGE_IDS.has(item.badge_id)) {
        const obj = {};
        const merged = Object.assign(item);
        obj.hidden = set.has(item.badge_id);
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
      let NON_CUSTOMIZABLE_BADGE_IDS = set(14022).NON_CUSTOMIZABLE_BADGE_IDS;
      if (NON_CUSTOMIZABLE_BADGE_IDS.has(item10026.badge_id)) {
        let arr = items1.push(item10026);
      } else {
        let result = map.set(item10026.badge_id, item10026);
      }
      continue;
    }
    const items2 = [];
    for (const item10049 of pendingBadgeDisplayOrder) {
      let value = map.get(item10049);
      if (null != value) {
        arr = items2.push(tmp22);
        let deleteResult = map.delete(item10049);
      }
      continue;
    }
    const items3 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items1, 0));
    HermesBuiltin.arraySpread(map.values(), arraySpreadResult);
    return items3;
  }
};
export const applyPendingBadgeSettingsToProfileBadges = function applyPendingBadgeSettingsToProfileBadges(arr2, arg1) {
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  let set;
  if (null == pendingBadgeDisplayOrder) {
    if (null == pendingBadgeHiddenBadges) {
      const items = [];
      HermesBuiltin.arraySpread(arr2, 0);
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
    HermesBuiltin.arraySpread(arr2, 0);
    let found = items1;
  } else {
    found = arr2.filter((item, index) => {
      const profileBadgeId = set(dependencyMap[5]).resolveProfileBadgeId(item.id);
      let hasItem = null == profileBadgeId;
      if (!hasItem) {
        const NON_CUSTOMIZABLE_BADGE_IDS = set(dependencyMap[3]).NON_CUSTOMIZABLE_BADGE_IDS;
        hasItem = NON_CUSTOMIZABLE_BADGE_IDS.has(profileBadgeId);
      }
      if (!hasItem) {
        hasItem = !set.has(profileBadgeId);
      }
      return hasItem;
    });
  }
  if (null == pendingBadgeDisplayOrder) {
    return found;
  } else {
    const items2 = [];
    const _Map = Map;
    const map = new Map();
    for (const item10027 of found) {
      let tmp12 = set;
      let obj = set(8937);
      let profileBadgeId = obj.resolveProfileBadgeId(item10027.id);
      let tmp15 = profileBadgeId;
      if (null != profileBadgeId) {
        let NON_CUSTOMIZABLE_BADGE_IDS = tmp12(14022).NON_CUSTOMIZABLE_BADGE_IDS;
        if (!NON_CUSTOMIZABLE_BADGE_IDS.has(tmp15)) {
          if (!map.has(tmp15)) {
            let result = map.set(tmp15, item10027);
          }
          continue;
        }
      }
      let arr = items2.push(item10027);
    }
    const items3 = [];
    for (const item10059 of pendingBadgeDisplayOrder) {
      let value = map.get(item10059);
      if (null != value) {
        arr = items3.push(tmp27);
        let deleteResult = map.delete(item10059);
      }
      continue;
    }
    const items4 = [];
    HermesBuiltin.arraySpread(map.values(), HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items2, 0)));
    return items4;
  }
};
export { moveBadgeInDisplayOrder };