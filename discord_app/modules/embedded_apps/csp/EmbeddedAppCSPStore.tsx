// === Module 10887: EmbeddedAppCSPStore ===

// Module 10887 (EmbeddedAppCSPStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const Store = initializeDefault.Store;
class EmbeddedAppCSPStore extends Store {
}
EmbeddedAppCSPStore.prototype["getPolicy"] = function getPolicy(applicationRouterOrigin) {
  value = map.get(applicationRouterOrigin);
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