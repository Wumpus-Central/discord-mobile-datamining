// === Module 7108: ConnectedAppsStore ===

// Module 7108 (ConnectedAppsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let obj = {};
const Store = initializeDefault.Store;
class ConnectedAppsStore extends Store {
}
const prototype = ConnectedAppsStore.prototype;
prototype["isConnected"] = function isConnected(arg0) {
  return null != obj[arg0];
};
prototype["isChildConnected"] = function isChildConnected(arg0) {
  closure_0 = arg0;
  let someResult = null != arg0;
  if (someResult) {
    const _Object = Object;
    const values = Object.values(obj);
    someResult = values.some((parentId) => parentId.parentId === closure_0);
  }
  return someResult;
};
Object.defineProperty(prototype, "connections", {
  get: function connections() {
    obj = require("module_12");
    return obj.values(obj);
  },
  set: undefined
});
prototype["getApplication"] = function getApplication(arg0) {
  return obj[arg0];
};
prototype["getAllConnections"] = function getAllConnections() {
  return obj;
};
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
    let tmp = null != application.id;
    if (tmp) {
      tmp = null != obj[application.id];
    }
    if (tmp) {
      obj[application.id].authenticated = true;
    }
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnection(application) {
    application = application.application;
    let tmp3 = null != application.id;
    if (tmp3) {
      tmp3 = null != obj[application.id];
    }
    if (tmp3) {
      obj[application.id].count = obj[application.id].count - 1;
      if (0 === obj[application.id].count) {
        const id = application.id;
        delete tmp2[tmp];
      }
    }
  }
};
const connectedAppsStore = new ConnectedAppsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/ConnectedAppsStore.tsx");

export default connectedAppsStore;