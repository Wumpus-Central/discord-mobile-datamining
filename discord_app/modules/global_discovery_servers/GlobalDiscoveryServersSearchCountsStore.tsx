// === Module 13307: map ===

// Module 13307 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4277 */;

require = arg1;
const map = new Map();
class SearchCountState {
}
const prototype = SearchCountState.prototype;
prototype["handleSearchCountStart"] = function handleSearchCountStart() {
  this.error = null;
  this.isFetching = true;
};
prototype["handleSearchCountSuccess"] = function handleSearchCountSuccess(categoryCounts) {
  this.counts = categoryCounts;
  this.isFetching = false;
  this.isInitialFetchComplete = true;
};
prototype["handleSearchCountFailure"] = function handleSearchCountFailure(error) {
  const aPIError = new V6OrEarlierAPIError.APIError(error);
  this.error = aPIError;
  this.isFetching = false;
};
const Store = initializeDefault.Store;
class GlobalDiscoveryServersSearchCountStore extends Store {
}
const prototype2 = GlobalDiscoveryServersSearchCountStore.prototype;
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(arg0) {
  const value = map.get(arg0);
  let prop = null;
  if (null != value) {
    prop = value.isInitialFetchComplete;
  }
  return prop;
};
prototype2["getIsFetchingCounts"] = function getIsFetchingCounts(arg0) {
  const value = map.get(arg0);
  let isFetching = null;
  if (null != value) {
    isFetching = value.isFetching;
  }
  return isFetching;
};
prototype2["getCounts"] = function getCounts(query) {
  const value = map.get(query);
  let counts = null;
  if (null != value) {
    counts = value.counts;
  }
  return counts;
};
GlobalDiscoveryServersSearchCountStore.displayName = "GlobalDiscoveryServersSearchCountStore";
const globalDiscoveryServersSearchCountStore = new GlobalDiscoveryServersSearchCountStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function handleGlobalDiscoveryServersSearchCountStart(query) {
    query = query.query;
    let obj = map;
    obj = map.get(query);
    if (obj == null) {
      if (typeof SearchCountState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchCountState.prototype);
      const tmp = SearchCountState;
    }
    const result = obj.set(query, obj);
    const result1 = obj.handleSearchCountStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    query = query.query;
    let obj = map;
    obj = map.get(query);
    if (obj == null) {
      if (typeof SearchCountState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchCountState.prototype);
      const tmp = SearchCountState;
    }
    const result = obj.set(query, obj);
    const result1 = obj.handleSearchCountSuccess(query.categoryCounts);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function handleGlobalDiscoveryServersSearchCountFailure(query) {
    query = query.query;
    let obj = map;
    obj = map.get(query);
    if (obj == null) {
      if (typeof SearchCountState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchCountState.prototype);
      const tmp = SearchCountState;
    }
    const result = obj.set(query, obj);
    const result1 = obj.handleSearchCountFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    let set;
    set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((arg0, arg1) => {
      if (!set.has(arg1)) {
        closure_1_2.delete(arg1);
      }
    });
  }
});
let result = require("set").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx");

export default globalDiscoveryServersSearchCountStore;