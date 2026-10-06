// === Module 6610: ConnectedAppsStore ===

// Module 6610 (ConnectedAppsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj = {};
const Store = get_initializedDefault.Store;
class ConnectedAppsStore extends Store {
  isConnected(arg0) {
    return null != obj[arg0];
  }
  isChildConnected(arg0) {
    let closure_0 = arg0;
    let someResult = null != arg0;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(obj);
      someResult = values.some((parentId) => parentId.parentId === closure_0);
    }
    return someResult;
  }
  getApplication(arg0) {
    return obj[arg0];
  }
  getAllConnections() {
    return obj;
  }
}
Object.defineProperty(ConnectedAppsStore.prototype, "connections", {
  get: function connections() {
    obj = require("module_12");
    return obj.values(obj);
  },
  set: undefined
});
ConnectedAppsStore.displayName = "ConnectedAppsStore";
obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(connectedApps) {
    obj = {};
    const merged = Object.assign(connectedApps.connectedApps);
  },
  RPC_APP_CONNECTED: function handleAppConnection(application) {
    application = application.application;
    if (null == application.id) {
      return false;
    } else {
      const id = application.id;
      if (null == obj[id]) {
        obj = { count: 0, id: null, parentId: null, name: null, icon: null, coverImage: null, authenticated: false };
        ({ id: obj.id, parentId: obj.parentId, name: obj.name, icon: obj.icon, coverImage: obj.coverImage } = application);
        obj[id] = obj;
      }
      obj[id].count = obj[id].count + 1;
    }
  },
  RPC_APP_AUTHENTICATED: function handleAppAuthenticated(application) {
    application = application.application;
    const tmp = null != application.id && null != obj[application.id];
    if (tmp) {
      obj[application.id].authenticated = true;
    }
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnection(application) {
    application = application.application;
    const tmp = null != application.id && null != obj[application.id];
    if (tmp) {
      obj[application.id].count = obj[application.id].count - 1;
      if (0 === obj[application.id].count) {
        delete obj[application.id];
      }
    }
  }
};
const connectedAppsStore = new ConnectedAppsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ConnectedAppsStore.tsx");

export default connectedAppsStore;