// discord_app/modules/headless_tasks/android/BackgroundSync.tsx
import timestampDefault from "../../debug/Logger.tsx";
import databaseNameDefault from "../../app_database/system/DatabaseManager.tsx";
import _handleConnectionOpen from "../../gateway/GatewayConnectionStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import getState from "../../../stores/native/AppStateStore.tsx";

const require = fn;
let closure_6 = new timestampDefault("BackgroundSync");
let tmp = new timestampDefault("BackgroundSync");
let result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  closure_0 = arg0;
  if ("active" === state.getState()) {
    let resolved = Promise.resolve();
  } else {
    if (!tmp) {
      const result = databaseNameDefault.carefullyOpenDatabase(id.getId());
    }
    resolved = new Promise((arg0) => {
      closure_1_6.log("Executing BackgroundSync with ", callback);
      const obj = callback(dependencyMap[5]);
      callback(dependencyMap[5]).backgroundSync({}).then(arg0);
    });
    tmp = connected.isConnected() || connected.isTryingToConnect();
  }
  return resolved;
};