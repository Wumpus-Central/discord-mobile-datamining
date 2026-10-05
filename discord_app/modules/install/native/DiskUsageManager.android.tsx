// === Module 15398: DiskUsageManager ===

// Module 15398 (DiskUsageManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

class DiskUsageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      APP_STATE_UPDATE() {

      }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  clearCaches() {

  }
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = DiskUsageManager.prototype;
const diskUsageManager = new DiskUsageManager();
const result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default diskUsageManager;