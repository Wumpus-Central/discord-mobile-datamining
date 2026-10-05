// === Module 15418: GeneratedTestUsersStore ===

// Module 15418 (GeneratedTestUsersStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

let map1, set;

function handleAddUser(id) {
  if (null == closure_1.users) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    closure_1.users = new Map();
    map = new Map();
  }
  const users = closure_1.users;
  id = id.id;
  set = users.set;
  const tmp5 = new UserRecord(id);
  const result = set(id, tmp5);
}
let map = { pools: null, users: null };
const PersistedStore = get_initializedDefault.PersistedStore;
class GeneratedTestUsersStore extends PersistedStore {
  initialize(pools) {
    if (null != pools) {
      if (null != pools.pools) {
        const _Map = Map;
        const _Object = Object;
        const self = this;
        const self2 = this;
        closure_1.pools = new Map(Object.entries(pools.pools));
        map = new Map(Object.entries(pools.pools));
      }
      if (null != pools.users) {
        const _Map2 = Map;
        const _Object2 = Object;
        const self3 = this;
        const self4 = this;
        closure_1.users = new Map(Object.entries(pools.users));
        map1 = new Map(Object.entries(pools.users));
      }
    }
  }
  getState() {
    let fromEntriesResult1;
    let fromEntriesResult = null;
    if (null != closure_1.pools) {
      const _Object = Object;
      fromEntriesResult = Object.fromEntries(closure_1.pools);
    }
    const obj = { pools: fromEntriesResult, users: fromEntriesResult1 };
    fromEntriesResult1 = null;
    if (null != closure_1.users) {
      const _Object2 = Object;
      fromEntriesResult1 = Object.fromEntries(closure_1.users);
    }
    return obj;
  }
  getUsersForPool(id) {
    let pools;
    let closure_0 = id;
    const users = pools.users;
    let items;
    const _Array = Array;
    if (users != null) {
      items = users.values();
    }
    if (items == null) {
      items = [];
    }
    const fromResult = from(items);
    return fromResult.filter((id) => {
      pools = pools.pools;
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
  }
  getPool(id) {
    const pools = closure_1.pools;
    let value;
    if (pools != null) {
      value = pools.get(id);
    }
    if (value == null) {
      value = null;
    }
    return value;
  }
  getUser(arg0) {
    const users = closure_1.users;
    let value;
    if (users != null) {
      value = users.get(arg0);
    }
    if (value == null) {
      value = null;
    }
    return value;
  }
  getPools() {
    let arr = null;
    if (null !== closure_1.pools) {
      const _Array = Array;
      const pools = tmp.pools;
      arr = Array.from(pools.values());
    }
    return arr;
  }
}
const prototype = GeneratedTestUsersStore.prototype;
GeneratedTestUsersStore.displayName = "GeneratedTestUsersStore";
GeneratedTestUsersStore.persistKey = "GeneratedTestUsersStore";
let obj = {
  GENERATED_POOL_BY_ID_FETCH_SUCCESS: function handleFetchPoolByIdSuccess(arg0) {
    let pool;
    let users;
    ({ pool, users } = arg0);
    if (null == closure_1.pools) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      closure_1.pools = new Map();
      map = new Map();
    }
    const pools = closure_1.pools;
    const result = pools.set(pool.id, pool);
    const item = users.forEach(handleAddUser);
  },
  GENERATED_POOL_REMOVE_FROM_LIST: function handleRemovePool(poolId) {
    let users;
    poolId = poolId.poolId;
    const pools = users.pools;
    let value;
    if (pools != null) {
      value = pools.get(poolId);
    }
    if (null == value) {
      return false;
    } else {
      if (value.userIds.length > 0) {
        const userIds = value.userIds;
        const item = userIds.forEach((item) => {
          users = users.users;
          if (users != null) {
            users.delete(item);
          }
        });
      }
      const pools2 = users.pools;
      if (pools2 != null) {
        pools2.delete(poolId);
      }
    }
  }
};
const generatedTestUsersStore = new GeneratedTestUsersStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersStore.tsx");

export default generatedTestUsersStore;