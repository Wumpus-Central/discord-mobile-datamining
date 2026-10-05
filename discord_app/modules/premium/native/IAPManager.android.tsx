// discord_app/modules/premium/native/IAPManager.android.tsx
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class IAPManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      POST_CONNECTION_OPEN() {},
      APP_STATE_UPDATE() {},
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const iAPManager = new IAPManager();
const result = size.fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default iAPManager;
