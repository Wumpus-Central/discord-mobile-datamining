// discord_app/modules/install/native/DiskUsageManager.android.tsx
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class DiskUsageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      APP_STATE_UPDATE() {},
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  clearCaches() {}
  _initialize() {}
  _terminate() {}
}
const prototype = DiskUsageManager.prototype;
const diskUsageManager = new DiskUsageManager();
const result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default diskUsageManager;
