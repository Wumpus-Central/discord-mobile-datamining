// discord_app/modules/premium/native/IAPManager.android.tsx
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let prototype = function IAPManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {},
    APP_STATE_UPDATE() {},
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default prototype;
