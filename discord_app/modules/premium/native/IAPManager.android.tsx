// discord_app/modules/premium/native/IAPManager.android.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";

initializeDefault;
let prototype = function IAPManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {

    },
    APP_STATE_UPDATE() {

    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("obj132").fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default prototype;