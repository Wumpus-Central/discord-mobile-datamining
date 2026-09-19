// === Module 18372: BackgroundSync ===

// Module 18372 (BackgroundSync)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2087 */;
import background_sync_BackgroundSync from "background_sync/BackgroundSync" /* 17731 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5489 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1979 */;

require = fn;
let closure_6 = new LoggerDefault("BackgroundSync");
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  closure_0 = arg0;
  if ("active" === AppStateStore.getState()) {
    let resolved = Promise.resolve();
  } else {
    if (!tmp) {
      const result = DatabaseManagerDefault.carefullyOpenDatabase(AuthenticationStore.getId());
    }
    resolved = new Promise((arg0) => {
      logger.log("Executing BackgroundSync with ", closure_0);
      background_sync_BackgroundSync.backgroundSync({}).then(arg0);
    });
    tmp = GatewayConnectionStore.isConnected() || GatewayConnectionStore.isTryingToConnect();
  }
  return resolved;
};