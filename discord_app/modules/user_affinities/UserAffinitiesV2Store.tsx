// discord_app/modules/user_affinities/UserAffinitiesV2Store.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
  map = new Map(
    found.map((otherUserId) => {
      const items = [otherUserId.otherUserId, otherUserId];
      return items;
    }),
  );
  if (null != _null) {
    value = map.get(_null.otherUserId);
    if (value == null) {
      value = null;
    }
    c5 = value;
    const result = map.set(_null.otherUserId, _null);
  }
}
const USER_AFFINITY_TTL = fn(7614).USER_AFFINITY_TTL;
let map = new Map();
let c3 = false;
let c4 = null;
let c5 = null;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
const PersistedStore = initializeDefault.PersistedStore;
class UserAffinitiesV2Store extends PersistedStore {}
const prototype = UserAffinitiesV2Store.prototype;
prototype["initialize"] = function initialize(userAffinities) {
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
    const found = userAffinities1.filter(
      (otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId),
    );
    map = new Map(
      found.map((otherUserId) => {
        const items = [otherUserId.otherUserId, otherUserId];
        return items;
      }),
    );
    if (null != _null) {
      value = map.get(_null.otherUserId);
      if (value == null) {
        value = null;
      }
      c5 = value;
      const result = map.set(_null.otherUserId, _null);
    }
  }
  const items = [RelationshipStore];
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
prototype["getDevToolsOverride"] = function getDevToolsOverride() {
  return c4;
};
prototype["compare"] = function compare(arg0, arg1) {
  value = map.get(arg1);
  let num;
  if (value != null) {
    num = value.communicationProbability;
  }
  if (num == null) {
    num = 0;
  }
  value2 = map.get(arg0);
  let num2;
  if (value2 != null) {
    num2 = value2.communicationProbability;
  }
  if (num2 == null) {
    num2 = 0;
  }
  return num - num2;
};
prototype["compareByDmProbability"] = function compareByDmProbability(arg0, arg1) {
  value = map.get(arg1);
  let num;
  if (value != null) {
    num = value.dmProbability;
  }
  if (num == null) {
    num = 0;
  }
  value2 = map.get(arg0);
  let num2;
  if (value2 != null) {
    num2 = value2.dmProbability;
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
  value = map.get(arg0);
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
const userAffinitiesV2Store = new UserAffinitiesV2Store(DispatcherDefault, {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    c3 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    obj.lastFetched = Date.now();
    c3 = false;
    obj.userAffinities = affineUsers.affineUsers;
    const userAffinities = obj.userAffinities;
    const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
    map = new Map(
      found.map((otherUserId) => {
        const items = [otherUserId.otherUserId, otherUserId];
        return items;
      }),
    );
    if (null != _null) {
      value = map.get(_null.otherUserId);
      if (value == null) {
        value = null;
      }
      c5 = value;
      const result = map.set(_null.otherUserId, _null);
    }
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    c3 = false;
  },
  DEV_TOOLS_SET_USER_AFFINITY_OVERRIDE: function handleSetDevToolsOverride(override) {
    override = override.override;
    if (!(null != _null || null != override)) {
      return tmp;
    } else {
      if (null != _null) {
        _null = override;
        const result = map.set(override.otherUserId, override);
      }
      if (null == _null) {
        if (null != override) {
          value = map.get(override.otherUserId);
          if (value == null) {
            value = null;
          }
          c5 = value;
          _null = override;
          const result1 = map.set(override.otherUserId, override);
        }
      } else {
        if (null != c5) {
          const result2 = map.set(_null.otherUserId, c5);
        } else {
          map.delete(_null.otherUserId);
        }
        c5 = null;
        _null = null;
      }
    }
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(frozen);
    map = new Map();
    c3 = false;
    c4 = null;
    c5 = null;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default userAffinitiesV2Store;
