// discord_app/modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx
import set2 from "../../../_runtime/00002_set.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";
import DEFAULT_DISCOVERY_CATEGORY_ID from "GlobalDiscoveryServersConstants.tsx";

({
  SEARCH_RESULTS_QUERY_PREFIX: obj1,
  SEARCH_RESULTS_CATEGORY_PREFIX: c3,
  SEARCH_RESULTS_LANGUAGE_CODE_PREFIX: c4,
} = DEFAULT_DISCOVERY_CATEGORY_ID);
const map = new Map();
const map1 = new Map();
class SearchState {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    obj.query = global.query;
    return obj;
  }
}
const prototype = SearchState.prototype;
prototype["handleSearchStart"] = function handleSearchStart() {
  this.error = null;
  this.isFetching = true;
};
prototype["handleSearchFailure"] = function handleSearchFailure(arg0) {
  this.isFetching = false;
  this.isInitialFetchComplete = true;
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  this.error = aPIError;
};
prototype["handleSearchSuccess"] = function handleSearchSuccess(arg0) {
  const self = this;
  ({ total, guilds } = arg0);
  let items;
  this.error = null;
  this.isFetching = false;
  this.isInitialFetchComplete = true;
  this.lastFetchTimestamp = Date.now();
  if (null != total) {
    self.total = total;
  }
  items = [...self.guildIds];
  const item = guilds.forEach((id) => items.push(id.id));
  self.guildIds = items;
  self.offset = items.length;
};
const Store = initializeDefault.Store;
class GlobalDiscoveryServersSearchResultsStore extends Store {}
const prototype2 = GlobalDiscoveryServersSearchResultsStore.prototype;
prototype2["getGuild"] = function getGuild(arg0) {
  return map1.get(arg0);
};
prototype2["getGuildIds"] = function getGuildIds(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let guildIds = null;
  if (null != value) {
    guildIds = value.guildIds;
  }
  return guildIds;
};
prototype2["getIsFetching"] = function getIsFetching(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let isFetching = null;
  if (null != value) {
    isFetching = value.isFetching;
  }
  return isFetching;
};
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let prop = null;
  if (null != value) {
    prop = value.isInitialFetchComplete;
  }
  return prop;
};
prototype2["getOffset"] = function getOffset(nativeElementReference) {
  const items = [
    closure_2,
    nativeElementReference.query,
    closure_3,
    nativeElementReference.categoryId,
    closure_4,
    nativeElementReference.languageCode,
  ];
  const value = map.get(items.join("-"));
  let offset = null;
  if (null != value) {
    offset = value.offset;
  }
  return offset;
};
prototype2["getTotal"] = function getTotal(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let total = null;
  if (null != value) {
    total = value.total;
  }
  return total;
};
prototype2["getLastFetchTimestamp"] = function getLastFetchTimestamp(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let lastFetchTimestamp = null;
  if (null != value) {
    lastFetchTimestamp = value.lastFetchTimestamp;
  }
  return lastFetchTimestamp;
};
prototype2["getError"] = function getError(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  error = null;
  if (null != value) {
    error = value.error;
  }
  return error;
};
prototype2["getErrorMessage"] = function getErrorMessage(query) {
  const items = [closure_2, query.query, closure_3, query.categoryId, closure_4, query.languageCode];
  const value = map.get(items.join("-"));
  let tmp2 = null;
  if (null != value) {
    error = value.error;
    let anyErrorMessage;
    if (error != null) {
      anyErrorMessage = error.getAnyErrorMessage();
    }
    tmp2 = anyErrorMessage;
  }
  return tmp2;
};
GlobalDiscoveryServersSearchResultsStore.displayName = "GlobalDiscoveryServersSearchResultsStore";
const globalDiscoveryServersSearchResultsStore = new GlobalDiscoveryServersSearchResultsStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function handleGlobalDiscoveryServersSearchStart(reset) {
    ({ query, categoryId, languageCode } = reset);
    const items = [closure_2, query, closure_3, categoryId, closure_4, languageCode];
    if (reset.reset) {
      map.delete(tmp4);
    }
    const items1 = [closure_2, query, closure_3, categoryId, closure_4, languageCode];
    const joined = items1.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp8 = SearchState;
    }
    const result = obj.set(joined, value);
    value.handleSearchStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function handleGlobalDiscoveryServersSearchSuccess(total) {
    ({ query, guilds } = total);
    const items = [closure_2, query, closure_3, total.categoryId, closure_4, total.languageCode];
    const joined = items.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp2 = SearchState;
    }
    let result = obj.set(joined, value);
    value.handleSearchSuccess({ total: total.total, guilds });
    const item = guilds.forEach((id) => {
      const result = closure_6.set(id.id, id);
    });
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function handleGlobalDiscoveryServersSearchFailure(query) {
    query = query.query;
    const items = [closure_2, query, closure_3, query.categoryId, closure_4, query.languageCode];
    const joined = items.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp2 = SearchState;
    }
    const result = obj.set(joined, value);
    value.handleSearchFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    let set;
    set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((query) => {
      if (null != query.query) {
        if (!set.has(query.query)) {
          closure_1_5.delete(arg1);
        }
      }
    });
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleGuildProfileFetchSuccess(arg0) {
    ({ guildId, profile } = arg0);
    let obj = map1;
    const value = map1.get(guildId);
    if (null == value) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(value);
      let memberCount = profile.memberCount;
      if (memberCount == null) {
        memberCount = value.memberCount;
      }
      obj.memberCount = memberCount;
      let presenceCount = profile.onlineCount;
      if (presenceCount == null) {
        presenceCount = value.presenceCount;
      }
      obj.presenceCount = presenceCount;
      const result = obj.set(guildId, obj);
    }
  },
});
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function handleGlobalDiscoveryServersSearchStart(reset) {
    ({ query, categoryId, languageCode } = reset);
    const items = [closure_2, query, closure_3, categoryId, closure_4, languageCode];
    if (reset.reset) {
      map.delete(tmp4);
    }
    const items1 = [closure_2, query, closure_3, categoryId, closure_4, languageCode];
    const joined = items1.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp8 = SearchState;
    }
    const result = obj.set(joined, value);
    value.handleSearchStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function handleGlobalDiscoveryServersSearchSuccess(total) {
    ({ query, guilds } = total);
    const items = [closure_2, query, closure_3, total.categoryId, closure_4, total.languageCode];
    const joined = items.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp2 = SearchState;
    }
    let result = obj.set(joined, value);
    value.handleSearchSuccess({ total: total.total, guilds });
    const item = guilds.forEach((id) => {
      const result = closure_6.set(id.id, id);
    });
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function handleGlobalDiscoveryServersSearchFailure(query) {
    query = query.query;
    const items = [closure_2, query, closure_3, query.categoryId, closure_4, query.languageCode];
    const joined = items.join("-");
    let obj = map;
    let value = map.get(joined);
    if (value == null) {
      if (typeof SearchState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchState.prototype);
      obj[0] = [];
      obj.query = query;
      value = obj;
      const tmp2 = SearchState;
    }
    const result = obj.set(joined, value);
    value.handleSearchFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    let set;
    set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((query) => {
      if (null != query.query) {
        if (!set.has(query.query)) {
          closure_1_5.delete(arg1);
        }
      }
    });
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleGuildProfileFetchSuccess(arg0) {
    ({ guildId, profile } = arg0);
    let obj = map1;
    const value = map1.get(guildId);
    if (null == value) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(value);
      let memberCount = profile.memberCount;
      if (memberCount == null) {
        memberCount = value.memberCount;
      }
      obj.memberCount = memberCount;
      let presenceCount = profile.onlineCount;
      if (presenceCount == null) {
        presenceCount = value.presenceCount;
      }
      obj.presenceCount = presenceCount;
      const result = obj.set(guildId, obj);
    }
  },
};
let result = set2.fileFinishedImporting(
  "modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx",
);

export default globalDiscoveryServersSearchResultsStore;
