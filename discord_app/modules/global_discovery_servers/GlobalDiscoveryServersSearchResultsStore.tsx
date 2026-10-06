// === Module 13533: GlobalDiscoveryServersSearchResultsStore ===

// Module 13533 (GlobalDiscoveryServersSearchResultsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5319 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9284 */;
import size from "module_2" /* 2 */;

let set;

let c2;
let c3;
let closure_4;
({ SEARCH_RESULTS_QUERY_PREFIX: c2, SEARCH_RESULTS_CATEGORY_PREFIX: c3, SEARCH_RESULTS_LANGUAGE_CODE_PREFIX: closure_4 } = GlobalDiscoveryServersConstants);
const map = new Map();
const map1 = new Map();
class SearchState {
  constructor(query) {
    query = query.query;
    const merged = Object.assign({ guildIds: null, error: null, offset: null, total: null, isFetching: false, isInitialFetchComplete: false, lastFetchTimestamp: null });
    merged[0] = [];
    merged.query = query;
    return merged;
  }
  handleSearchStart() {
    this.error = null;
    this.isFetching = true;
  }
  handleSearchFailure(arg0) {
    this.isFetching = false;
    this.isInitialFetchComplete = true;
    const aPIError = new V6OrEarlierAPIError.APIError(arg0);
    this.error = aPIError;
  }
  handleSearchSuccess(arg0) {
    let guilds;
    let total;
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
  }
}
const prototype = SearchState.prototype;
const Store = get_initializedDefault.Store;
class GlobalDiscoveryServersSearchResultsStore extends Store {
  getGuild(arg0) {
    return map1.get(arg0);
  }
  getGuildIds(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let guildIds = null;
    if (null != value) {
      guildIds = value.guildIds;
    }
    return guildIds;
  }
  getIsFetching(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let isFetching = null;
    if (null != value) {
      isFetching = value.isFetching;
    }
    return isFetching;
  }
  getIsInitialFetchComplete(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let prop = null;
    if (null != value) {
      prop = value.isInitialFetchComplete;
    }
    return prop;
  }
  getOffset(nativeElementReference) {
    const items = [React2, nativeElementReference.query, _false, nativeElementReference.categoryId, React3, nativeElementReference.languageCode];
    const value = map.get(items.join("-"));
    let offset = null;
    if (null != value) {
      offset = value.offset;
    }
    return offset;
  }
  getTotal(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let total = null;
    if (null != value) {
      total = value.total;
    }
    return total;
  }
  getLastFetchTimestamp(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let lastFetchTimestamp = null;
    if (null != value) {
      lastFetchTimestamp = value.lastFetchTimestamp;
    }
    return lastFetchTimestamp;
  }
  getError(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let error = null;
    if (null != value) {
      error = value.error;
    }
    return error;
  }
  getErrorMessage(query) {
    const items = [React2, query.query, _false, query.categoryId, React3, query.languageCode];
    const value = map.get(items.join("-"));
    let tmp2 = null;
    if (null != value) {
      const error = value.error;
      let anyErrorMessage;
      if (error != null) {
        anyErrorMessage = error.getAnyErrorMessage();
      }
      tmp2 = anyErrorMessage;
    }
    return tmp2;
  }
}
const prototype2 = GlobalDiscoveryServersSearchResultsStore.prototype;
GlobalDiscoveryServersSearchResultsStore.displayName = "GlobalDiscoveryServersSearchResultsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function handleGlobalDiscoveryServersSearchStart(reset) {
    let categoryId;
    let languageCode;
    let query;
    ({ query, categoryId, languageCode } = reset);
    const items = [React2, query, _false, categoryId, React3, languageCode];
    if (reset.reset) {
      map.delete(tmp4);
    }
    const items1 = [React2, query, _false, categoryId, React3, languageCode];
    const joined = items1.join("-");
    let value = map.get(joined);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({ guildIds: null, error: null, offset: null, total: null, isFetching: false, isInitialFetchComplete: false, lastFetchTimestamp: null });
        merged[0] = [];
        merged.query = query;
        value = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(joined, value);
    value.handleSearchStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function handleGlobalDiscoveryServersSearchSuccess(categoryId) {
    let guilds;
    let query;
    ({ query, guilds } = categoryId);
    const items = [React2, query, _false, categoryId.categoryId, React3, categoryId.languageCode];
    const total = categoryId.total;
    const joined = items.join("-");
    let value = map.get(joined);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({ guildIds: null, error: null, offset: null, total: null, isFetching: false, isInitialFetchComplete: false, lastFetchTimestamp: null });
        merged[0] = [];
        merged.query = query;
        value = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let result = map.set(joined, value);
    value.handleSearchSuccess({ total, guilds });
    const item = guilds.forEach((id) => {
      const result = map1.set(id.id, id);
    });
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function handleGlobalDiscoveryServersSearchFailure(query) {
    query = query.query;
    const items = [React2, query, _false, query.categoryId, React3, query.languageCode];
    const error = query.error;
    const joined = items.join("-");
    let value = map.get(joined);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({ guildIds: null, error: null, offset: null, total: null, isFetching: false, isInitialFetchComplete: false, lastFetchTimestamp: null });
        merged[0] = [];
        merged.query = query;
        value = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(joined, value);
    value.handleSearchFailure(error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((query, index) => {
      if (null != query.query) {
        if (!set.has(query.query)) {
          map.delete(index);
        }
      }
    });
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleGuildProfileFetchSuccess(arg0) {
    let guildId;
    let memberCount;
    let presenceCount;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map1.get(guildId);
    if (null == value) {
      return false;
    } else {
      const obj = { memberCount, presenceCount };
      set = map1.set;
      const merged = Object.assign(value);
      memberCount = profile.memberCount;
      if (memberCount == null) {
        memberCount = value.memberCount;
      }
      presenceCount = profile.onlineCount;
      if (presenceCount == null) {
        presenceCount = value.presenceCount;
      }
      const result = set(guildId, obj);
    }
  }
};
const globalDiscoveryServersSearchResultsStore = new GlobalDiscoveryServersSearchResultsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx");

export default globalDiscoveryServersSearchResultsStore;