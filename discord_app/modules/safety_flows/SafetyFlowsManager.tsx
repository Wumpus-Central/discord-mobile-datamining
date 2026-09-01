// === Module 17445: handleConnectionOpenSupplemental ===

// Module 17445 (handleConnectionOpenSupplemental)
import initializeDefault from "initialize" /* 5486 */;
import _openSafetyFlow from "_openSafetyFlow" /* 17446 */;

require = arg1;
function handleConnectionOpenSupplemental() {
  _openSafetyFlow.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  _openSafetyFlow.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  _openSafetyFlow.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
initializeDefault;
let prototype = function SafetyFlowsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen, USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default prototype;