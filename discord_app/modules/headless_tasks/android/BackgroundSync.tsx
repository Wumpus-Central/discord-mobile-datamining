// discord_app/modules/headless_tasks/android/BackgroundSync.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DatabaseManagerDefault from "../../app_database/system/DatabaseManager.tsx";
import background_sync_BackgroundSync from "../../app_database/background_sync/native/BackgroundSync.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

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
