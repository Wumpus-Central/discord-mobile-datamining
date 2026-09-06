// === Module 17865: SafetyFlowsManager ===

// Module 17865 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 17866 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function handleConnectionOpenSupplemental() {
  openSafetyFlow.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  openSafetyFlow.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  openSafetyFlow.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
let prototype = function SafetyFlowsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen, USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default prototype;