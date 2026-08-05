// discord_app/stores/ConnectedAppsStore.tsx
import { Store } from "initialize";

let closure_2 = {};
class ConnectedAppsStore extends Store {
}
const prototype = ConnectedAppsStore.prototype;
prototype["isConnected"] = function isConnected(arg0) {
  return null != dependencyMap[arg0];
};
prototype["isChildConnected"] = function isChildConnected(arg0) {
  let closure_0 = arg0;
  let someResult = null != arg0;
  if (someResult) {
    const _Object = Object;
    const values = Object.values(closure_2);
    someResult = values.some((parentId) => parentId.parentId === closure_0);
  }
  return someResult;
};
Object.defineProperty(prototype, "connections", {
  get: function connections() {
    return require("../../_runtime/00012_apply.js").values(closure_2);
  },
  set: undefined
});
prototype["getApplication"] = function getApplication(arg0) {
  return dependencyMap[arg0];
};
prototype["getAllConnections"] = function getAllConnections() {
  return closure_2;
};
ConnectedAppsStore.displayName = "ConnectedAppsStore";
const connectedAppsStore = new ConnectedAppsStore(require("dispatcher"), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(connectedApps) {
    const obj = {};
    const merged = Object.assign(connectedApps.connectedApps);
  },
  RPC_APP_CONNECTED: function handleAppConnection(application) {
    application = application.application;
    if (null == application.id) {
      return false;
    } else {
      const id = application.id;
      if (null == dependencyMap[id]) {
        const obj = { count: 0, id: null, parentId: null, name: null, icon: null, coverImage: null, authenticated: false };
        ({ id: obj[1], parentId: obj[2], name: obj[3], icon: obj[4], coverImage: obj[5] } = application);
        dependencyMap[id] = obj;
      }
      dependencyMap[id].count = dependencyMap[id].count + 1;
    }
  },
  RPC_APP_AUTHENTICATED: function handleAppAuthenticated(application) {
    application = application.application;
    let tmp = null != application.id;
    if (tmp) {
      tmp = null != dependencyMap[application.id];
    }
    if (tmp) {
      dependencyMap[application.id].authenticated = true;
    }
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnection(application) {
    application = application.application;
    let tmp3 = null != application.id;
    if (tmp3) {
      tmp3 = null != dependencyMap[application.id];
    }
    if (tmp3) {
      dependencyMap[application.id].count = dependencyMap[application.id].count - 1;
      if (0 === dependencyMap[application.id].count) {
        const id = application.id;
        delete tmp2[tmp];
      }
    }
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/ConnectedAppsStore.tsx");

export default connectedAppsStore;