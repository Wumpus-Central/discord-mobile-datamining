// discord_app/modules/generated_test_users/GeneratedTestUsersStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_0 from "../../records/UserRecord.tsx";

function handleAddUser(id) {
  if (null == closure_1.users) {
    const _Map = Map;
    const map = new Map();
    tmp.users = map;
  }
  const users = tmp.users;
  const result = users.set(id.id, new closure_0(id));
}
let closure_1 = { pools: null, users: null };
const PersistedStore = initializeDefault.PersistedStore;
class GeneratedTestUsersStore extends PersistedStore {
}
const prototype = GeneratedTestUsersStore.prototype;
prototype["initialize"] = function initialize(pools) {
  if (null != pools) {
    if (null != pools.pools) {
      const _Map = Map;
      const _Object = Object;
      const map = new Map(Object.entries(pools.pools));
      closure_1.pools = map;
    }
    if (null != pools.users) {
      const _Map2 = Map;
      const _Object2 = Object;
      map1 = new Map(Object.entries(pools.users));
      closure_1.users = map1;
    }
  }
};
prototype["getState"] = function getState() {
  let fromEntriesResult = null;
  if (null != closure_1.pools) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(tmp.pools);
  }
  const obj = { pools: fromEntriesResult, users: null };
  let fromEntriesResult1 = null;
  if (null != closure_1.users) {
    const _Object2 = Object;
    fromEntriesResult1 = Object.fromEntries(tmp.users);
  }
  obj[1] = fromEntriesResult1;
  return obj;
};
prototype["getUsersForPool"] = function getUsersForPool(id) {
  closure_0 = id;
  const users = closure_1.users;
  let items;
  if (users != null) {
    items = users.values();
  }
  if (items == null) {
    items = [];
  }
  return Array.from(items).filter((id) => {
    const pools = closure_1_1.pools;
    let hasItem;
    if (pools != null) {
      const value = pools.get(closure_0);
      if (value != null) {
        const userIds = value.userIds;
        hasItem = userIds.includes(id.id);
      }
    }
    return hasItem;
  });
};
prototype["getPool"] = function getPool(id) {
  const pools = closure_1.pools;
  let value;
  if (pools != null) {
    value = pools.get(id);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getUser"] = function getUser(arg0) {
  const users = closure_1.users;
  let value;
  if (users != null) {
    value = users.get(arg0);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getPools"] = function getPools() {
  let arr = null;
  if (null !== closure_1.pools) {
    const _Array = Array;
    const pools = tmp.pools;
    arr = Array.from(pools.values());
  }
  return arr;
};
GeneratedTestUsersStore.displayName = "GeneratedTestUsersStore";
GeneratedTestUsersStore.persistKey = "GeneratedTestUsersStore";
const generatedTestUsersStore = new GeneratedTestUsersStore(dispatcherDefault, {
  GENERATED_POOL_BY_ID_FETCH_SUCCESS: function handleFetchPoolByIdSuccess(arg0) {
    ({ pool, users } = arg0);
    if (null == closure_1.pools) {
      const _Map = Map;
      const map = new Map();
      tmp.pools = map;
    }
    const pools = tmp.pools;
    const result = pools.set(pool.id, pool);
    const item = users.forEach(handleAddUser);
  },
  GENERATED_POOL_REMOVE_FROM_LIST: function handleRemovePool(poolId) {
    poolId = poolId.poolId;
    const pools = closure_1.pools;
    let value;
    if (pools != null) {
      value = pools.get(poolId);
    }
    if (null == value) {
      return false;
    } else {
      if (value.userIds.length > 0) {
        const userIds = value.userIds;
        const item = userIds.forEach((arg0) => {
          users = users.users;
          if (users != null) {
            users.delete(arg0);
          }
        });
      }
      const pools2 = tmp.pools;
      if (pools2 != null) {
        pools2.delete(poolId);
      }
    }
    tmp = closure_1;
  }
});
let result = require("set").fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersStore.tsx");

export default generatedTestUsersStore;