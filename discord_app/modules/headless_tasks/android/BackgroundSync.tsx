// === Module 17145: resolved ===

// Module 17145 (resolved)
import timestampDefault from "timestamp" /* 3 */;
import databaseNameDefault from "databaseName" /* 1971 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import getState from "getState" /* 7383 */;

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