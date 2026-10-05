// discord_app/modules/headless_tasks/android/BackgroundSync.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DatabaseManagerDefault from "../../app_database/system/DatabaseManager.tsx";
import background_sync_BackgroundSync from "../../app_database/background_sync/native/BackgroundSync.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp = new LoggerDefault("BackgroundSync");
let closure_6 = tmp;
let result = size.fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default function (arg0) {
  let logger;
  let resolved;
  let closure_0 = arg0;
  if ("active" === AppStateStore.getState()) {
    resolved = Promise.resolve();
  } else {
    const tmp = GatewayConnectionStore.isConnected() || GatewayConnectionStore.isTryingToConnect();
    if (!tmp) {
      const obj2 = DatabaseManagerDefault;
      const result = obj2.carefullyOpenDatabase(AuthenticationStore.getId());
    }
    const self = this;
    const self2 = this;
    resolved = new Promise((arg0) => {
      logger.log("Executing BackgroundSync with ", closure_0);
      const obj = background_sync_BackgroundSync;
      const backgroundSyncResult = obj.backgroundSync({});
      backgroundSyncResult.then(arg0);
    });
  }
  return resolved;
}
