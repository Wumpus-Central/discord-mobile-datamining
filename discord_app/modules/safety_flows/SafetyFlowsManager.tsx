// discord_app/modules/safety_flows/SafetyFlowsManager.tsx
import openSafetyFlow from "openSafetyFlow.native.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleConnectionOpenSupplemental() {
  const obj = openSafetyFlow;
  obj.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  const obj = openSafetyFlow;
  obj.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  requiredAction = requiredAction.requiredAction;
  const obj = openSafetyFlow;
  obj.openSafetyFlow({ requiredAction });
}
class SafetyFlowsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental,
      SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen,
      USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const safetyFlowsManager = new SafetyFlowsManager();
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default safetyFlowsManager;
