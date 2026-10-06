// === Module 7156: UserAffinitiesV2Store ===

// Module 7156 (UserAffinitiesV2Store)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserAffinitiesConstants from "UserAffinitiesConstants" /* 7157 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import size from "module_2" /* 2 */;

const f94549 = (otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId);
const f94550 = (otherUserId) => {
  const items = [otherUserId.otherUserId, otherUserId];
  return items;
};
function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter(f94549);
  map = new Map(found.map(f94550));
}
const USER_AFFINITY_TTL = UserAffinitiesConstants.USER_AFFINITY_TTL;
let map = new Map();
let c3 = false;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
const PersistedStore = get_initializedDefault.PersistedStore;
class UserAffinitiesV2Store extends PersistedStore {
  initialize(userAffinities) {
    const self = this;
    this.waitFor(RelationshipStore);
    userAffinities = undefined;
    if (userAffinities != null) {
      userAffinities = userAffinities.userAffinities;
    }
    if (null != userAffinities) {
      obj.userAffinities = userAffinities.userAffinities;
      obj.lastFetched = userAffinities.lastFetched;
      const _Map = Map;
      const userAffinities1 = obj.userAffinities;
      const found = userAffinities1.filter(f94549);
      const self2 = this;
      const self3 = this;
      new Map(found.map(f94550));
    }
    const items = [RelationshipStore];
    self.syncWith(items, recomputeAffinities);
  }
  shouldFetch() {
    if (!c3) {
      const _Date = Date;
      return Date.now() - obj.lastFetched > USER_AFFINITY_TTL;
    }
  }
  isFetching() {
    return c3;
  }
  getUserAffinities() {
    return obj.userAffinities;
  }
  getUserAffinitiesMap() {
    return map;
  }
  compare(arg0, arg1) {
    const value = map.get(arg1);
    let num;
    if (value != null) {
      num = value.communicationProbability;
    }
    if (num == null) {
      num = 0;
    }
    const value2 = map.get(arg0);
    let num2;
    if (value2 != null) {
      num2 = value2.communicationProbability;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }
  compareByDmProbability(arg0, arg1) {
    const value = map.get(arg1);
    let num;
    if (value != null) {
      num = value.dmProbability;
    }
    if (num == null) {
      num = 0;
    }
    const value2 = map.get(arg0);
    let num2;
    if (value2 != null) {
      num2 = value2.dmProbability;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }
  getUserAffinity(userId) {
    return map.get(userId);
  }
  getState() {
    return obj;
  }
  isHighlyAffinedVCUser(arg0) {
    const value = map.get(arg0);
    let num;
    if (value != null) {
      num = value.vcProbability;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0.5;
  }
}
const prototype = UserAffinitiesV2Store.prototype;
UserAffinitiesV2Store.displayName = "UserAffinitiesV2Store";
UserAffinitiesV2Store.persistKey = "UserAffinitiesStoreV2";
const obj2 = {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    c3 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    let blockedOrIgnored;
    affineUsers = affineUsers.affineUsers;
    obj.lastFetched = Date.now();
    c3 = false;
    obj.userAffinities = affineUsers;
    const userAffinities = obj.userAffinities;
    const found = userAffinities.filter(f94549);
    map = new Map(found.map(f94550));
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    c3 = false;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(frozen);
    map = new Map();
    c3 = false;
  }
};
const userAffinitiesV2Store = new UserAffinitiesV2Store(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default userAffinitiesV2Store;