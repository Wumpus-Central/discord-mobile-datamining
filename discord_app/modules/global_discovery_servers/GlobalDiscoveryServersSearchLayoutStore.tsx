// === Module 13703: GlobalDiscoveryServersSearchLayoutStore ===

// Module 13703 (GlobalDiscoveryServersSearchLayoutStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GlobalDiscoveryServersSearchResultsStoreDefault from "GlobalDiscoveryServersSearchResultsStore" /* 13704 */;
import GlobalDiscoveryServersSearchCountsStore from "GlobalDiscoveryServersSearchCountsStore" /* 13702 */;

function reset() {
  counts = [];
}
GlobalDiscoveryServersSearchResultsStoreDefault;
let counts = [];
const Store = initializeDefault.Store;
class GlobalDiscoveryServersSearchLayoutStore extends Store {
}
const prototype = GlobalDiscoveryServersSearchLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GlobalDiscoveryServersSearchCountsStore, GlobalDiscoveryServersSearchResultsStore);
};
prototype["getVisibleTabs"] = function getVisibleTabs() {
  return counts;
};
GlobalDiscoveryServersSearchLayoutStore.displayName = "GlobalDiscoveryServersSearchLayoutStore";
const globalDiscoveryServersSearchLayoutStore = new GlobalDiscoveryServersSearchLayoutStore(DispatcherDefault, {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    counts = GlobalDiscoveryServersSearchCountsStore.getCounts(query.query);
    if (null == counts) {
      return false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default globalDiscoveryServersSearchLayoutStore;