// discord_app/modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";

require = fn;
const map = new Map();
class SearchCountState {
  constructor() {
    return Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
  }
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
class GlobalDiscoveryServersSearchCountStore extends Store {}
const prototype2 = GlobalDiscoveryServersSearchCountStore.prototype;
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(arg0) {
  value = map.get(arg0);
  let prop = null;
  if (null != value) {
    prop = value.isInitialFetchComplete;
  }
  return prop;
};
prototype2["getIsFetchingCounts"] = function getIsFetchingCounts(arg0) {
  value = map.get(arg0);
  let isFetching = null;
  if (null != value) {
    isFetching = value.isFetching;
  }
  return isFetching;
};
prototype2["getCounts"] = function getCounts(query) {
  value = map.get(query);
  let counts = null;
  if (null != value) {
    counts = value.counts;
  }
  return counts;
};
GlobalDiscoveryServersSearchCountStore.displayName = "GlobalDiscoveryServersSearchCountStore";
const globalDiscoveryServersSearchCountStore = new GlobalDiscoveryServersSearchCountStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function handleGlobalDiscoveryServersSearchCountStart(query) {
    query = query.query;
    let merged = map.get(query);
    if (merged == null) {
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(query, merged);
    const result1 = merged.handleSearchCountStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    query = query.query;
    let merged = map.get(query);
    if (merged == null) {
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(query, merged);
    const result1 = merged.handleSearchCountSuccess(query.categoryCounts);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function handleGlobalDiscoveryServersSearchCountFailure(query) {
    query = query.query;
    let merged = map.get(query);
    if (merged == null) {
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(query, merged);
    const result1 = merged.handleSearchCountFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    const set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((item, index) => {
      if (!set.has(index)) {
        map.delete(index);
      }
    });
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx");

export default globalDiscoveryServersSearchCountStore;
