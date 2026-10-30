// === Module 10909: EmbeddedAppCSPStore ===

// Module 10909 (EmbeddedAppCSPStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const Store = initializeDefault.Store;
class EmbeddedAppCSPStore extends Store {
}
EmbeddedAppCSPStore.prototype["getPolicy"] = function getPolicy(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const embeddedAppCSPStore = new EmbeddedAppCSPStore(DispatcherDefault, {
  EMBEDDED_APP_CSP_FETCH_SUCCESS: function handleFetchSuccess(routerOrigin) {
    const result = map.set(routerOrigin.routerOrigin, routerOrigin.policy);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPStore.tsx");

export default embeddedAppCSPStore;