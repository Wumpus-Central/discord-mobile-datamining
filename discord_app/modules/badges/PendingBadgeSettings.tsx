// discord_app/modules/badges/PendingBadgeSettings.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import isPinnedBadge from "BadgeUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../stores/UserStore.tsx";
import closure_5 from "BadgeDirectoryStore.tsx";

require = arg1;
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
      const badges = obj4.getBadges(id);
      for (const item10020 of badges) {
        let tmp10 = item10020;
        let tmp11 = require;
        let tmp12 = dependencyMap;
        let obj2 = isPinnedBadge;
        if (!obj2.isPinnedBadge(item10020.badge_id)) {
          let tmp13 = item10020;
          if (tmp10.owned) {
            let tmp14 = item10020;
            if (tmp10.hidden) {
              let tmp17 = item10020;
              let addResult = set.add(tmp10.badge_id);
            } else {
              let tmp15 = item10020;
              let arr = items.push(tmp10.badge_id);
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
    obj4 = closure_5;
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
moveBadgeInDisplayOrder.__initData = {
  code: "function moveBadgeInDisplayOrder_PendingBadgeSettingsTsx1(badgeIds,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=badgeIds.length){return badgeIds;}const next=[...badgeIds];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;}",
};
let result = require("set").fileFinishedImporting("modules/badges/PendingBadgeSettings.tsx");

export const setPendingBadgeDisplayOrder = function setPendingBadgeDisplayOrder(items) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const displayOrder = tmp.displayOrder;
    tmp2 = items.length === displayOrder.length && items.every((arg0, arg1) => arg0 === displayOrder[arg1]);
    const tmp3 = items.length === displayOrder.length && items.every((arg0, arg1) => arg0 === displayOrder[arg1]);
  }
  let tmp4;
  if (!tmp2) {
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    tmp4 = items;
  }
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: tmp4 });
};
export const setPendingBadgeHiddenBadges = function setPendingBadgeHiddenBadges(items) {
  const tmp = getSavedBadgeSettings();
  let tmp2 = null != tmp;
  if (tmp2) {
    const hiddenBadges = tmp.hiddenBadges;
    tmp2 = items.length === hiddenBadges.size && items.every((arg0) => hiddenBadges.has(arg0));
    const tmp3 = items.length === hiddenBadges.size && items.every((arg0) => hiddenBadges.has(arg0));
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
  dispatcherDefault.dispatch({
    type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
    pendingBadgeDisplayOrder: "category",
    pendingBadgeHiddenBadges: "limit",
  });
};
export const applyPendingBadgeSettings = function applyPendingBadgeSettings(stateFromStoresArray, arg1) {
  ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = arg1);
  let set;
  set = null;
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
      let obj = set(closure_1_2[3]);
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
      let tmp12 = set;
      let tmp13 = dependencyMap;
      let obj = set(9005);
      if (obj.isPinnedBadge(item10026.badge_id)) {
        let tmp16 = item10026;
        let arr = items1.push(tmp11);
      } else {
        let tmp14 = item10026;
        let result = map.set(tmp11.badge_id, tmp11);
      }
      continue;
    }
    const items2 = [];
    for (const item10048 of pendingBadgeDisplayOrder) {
      let tmp20 = item10048;
      let value = map.get(item10048);
      if (null != value) {
        let tmp23 = value;
        arr = items2.push(tmp22);
        let tmp25 = item10048;
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
    found = arr2.filter((id) => {
      const profileBadgeId = set(closure_1_2[5]).resolveProfileBadgeId(id.id);
      let isPinnedBadgeResult = null == profileBadgeId;
      if (!isPinnedBadgeResult) {
        isPinnedBadgeResult = set(closure_1_2[3]).isPinnedBadge(profileBadgeId);
        const tmpResult = set(closure_1_2[3]);
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
      let tmp13 = dependencyMap;
      let obj = set(8561);
      let profileBadgeId = obj.resolveProfileBadgeId(item10027.id);
      let tmp15 = profileBadgeId;
      if (null != profileBadgeId) {
        let tmp12Result = tmp12(9005);
        let tmp16 = profileBadgeId;
        if (!tmp12Result.isPinnedBadge(tmp15)) {
          let tmp17 = profileBadgeId;
          if (!map.has(tmp15)) {
            let tmp18 = profileBadgeId;
            let tmp19 = item10027;
            let result = map.set(tmp15, tmp11);
          }
          continue;
        }
      }
      let tmp21 = item10027;
      let arr = items2.push(tmp11);
    }
    const items3 = [];
    for (const item10058 of pendingBadgeDisplayOrder) {
      let tmp25 = item10058;
      let value = map.get(item10058);
      if (null != value) {
        let tmp28 = value;
        arr = items3.push(tmp27);
        let tmp30 = item10058;
        let deleteResult = map.delete(tmp25);
      }
      continue;
    }
    const items4 = [];
    HermesBuiltin.arraySpread(map.values(), HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items2, 0)));
    return items4;
  }
};
export { moveBadgeInDisplayOrder };
