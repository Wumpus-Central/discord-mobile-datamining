// discord_app/modules/embedded_apps/csp/EmbeddedAppCSPStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const map = new Map();
const Store = initializeDefault.Store;
class EmbeddedAppCSPStore extends Store {}
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPStore.tsx");

export default embeddedAppCSPStore;
