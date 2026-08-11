// discord_app/modules/user_affinities/UserAffinitiesV2Store.tsx
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { USER_AFFINITY_TTL } from "result";
import { PersistedStore } from "initialize";

function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
  const map = new Map(found.map((otherUserId) => {
    const items = [otherUserId.otherUserId, otherUserId];
    return items;
  }));
}
let map = new Map();
let c3 = false;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
class UserAffinitiesV2Store extends PersistedStore {
}
const prototype = UserAffinitiesV2Store.prototype;
prototype["initialize"] = function initialize(userAffinities) {
  const self = this;
  this.waitFor(markAllUserIdListsStale);
  if (null != userAffinities) {
    obj.userAffinities = userAffinities.userAffinities;
    obj.lastFetched = userAffinities.lastFetched;
    const _Map = Map;
    userAffinities = obj.userAffinities;
    const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
    const map = new Map(found.map((otherUserId) => {
      const items = [otherUserId.otherUserId, otherUserId];
      return items;
    }));
  }
  const items = [markAllUserIdListsStale];
  self.syncWith(items, recomputeAffinities);
};
prototype["shouldFetch"] = function shouldFetch() {
  if (!c3) {
    const _Date = Date;
    return Date.now() - obj.lastFetched > USER_AFFINITY_TTL;
  }
};
prototype["isFetching"] = function isFetching() {
  return c3;
};
prototype["getUserAffinities"] = function getUserAffinities() {
  return obj.userAffinities;
};
prototype["getUserAffinitiesMap"] = function getUserAffinitiesMap() {
  return map;
};
prototype["compare"] = function compare(arg0, arg1) {
  let value = map.get(arg1);
  let num;
  if (value != null) {
    num = value.communicationProbability;
  }
  if (num == null) {
    num = 0;
  }
  value = map.get(arg0);
  let num2;
  if (value != null) {
    num2 = value.communicationProbability;
  }
  if (num2 == null) {
    num2 = 0;
  }
  return num - num2;
};
prototype["compareByDmProbability"] = function compareByDmProbability(arg0, arg1) {
  let value = map.get(arg1);
  let num;
  if (value != null) {
    num = value.dmProbability;
  }
  if (num == null) {
    num = 0;
  }
  value = map.get(arg0);
  let num2;
  if (value != null) {
    num2 = value.dmProbability;
  }
  if (num2 == null) {
    num2 = 0;
  }
  return num - num2;
};
prototype["getUserAffinity"] = function getUserAffinity(userId) {
  return map.get(userId);
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["isHighlyAffinedVCUser"] = function isHighlyAffinedVCUser(arg0) {
  const value = map.get(arg0);
  let num;
  if (value != null) {
    num = value.vcProbability;
  }
  if (num == null) {
    num = 0;
  }
  return num > 0.5;
};
UserAffinitiesV2Store.displayName = "UserAffinitiesV2Store";
UserAffinitiesV2Store.persistKey = "UserAffinitiesStoreV2";
obj = {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    let c3 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    obj.lastFetched = Date.now();
    let c3 = false;
    obj.userAffinities = affineUsers.affineUsers;
    const userAffinities = obj.userAffinities;
    const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
    const map = new Map(found.map((otherUserId) => {
      const items = [otherUserId.otherUserId, otherUserId];
      return items;
    }));
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    let c3 = false;
  },
  LOGOUT: function handleLogout() {
    const obj = {};
    const merged = Object.assign(frozen);
    const map = new Map();
    let c3 = false;
  }
};
const userAffinitiesV2Store = new UserAffinitiesV2Store(require("dispatcher"), obj);
const result = require("initialize").fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default userAffinitiesV2Store;