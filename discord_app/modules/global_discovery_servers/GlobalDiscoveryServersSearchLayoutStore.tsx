// === Module 13170: reset ===

// Module 13170 (reset)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "map" /* 13169 */;
import closure_1 from "map" /* 13171 */;

function reset() {
  closure_2 = [];
}
let closure_2 = [];
const Store = initializeDefault.Store;
class GlobalDiscoveryServersSearchLayoutStore extends Store {
}
const prototype = GlobalDiscoveryServersSearchLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0, closure_1);
};
prototype["getVisibleTabs"] = function getVisibleTabs() {
  return closure_2;
};
GlobalDiscoveryServersSearchLayoutStore.displayName = "GlobalDiscoveryServersSearchLayoutStore";
const globalDiscoveryServersSearchLayoutStore = new GlobalDiscoveryServersSearchLayoutStore(dispatcherDefault, {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    counts = counts.getCounts(query.query);
    if (null == counts) {
      return false;
    }
  }
});
const result = require("set").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default globalDiscoveryServersSearchLayoutStore;