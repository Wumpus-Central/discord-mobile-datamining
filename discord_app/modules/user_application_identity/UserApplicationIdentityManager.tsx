// === Module 17105: handleUserApplicationIdentityGatewayEvent ===

// Module 17105 (handleUserApplicationIdentityGatewayEvent)
import initializeDefault from "initialize" /* 5038 */;
import fetchStore from "fetchStore" /* 12286 */;

require = arg1;
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = fetchStore.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
initializeDefault;
let prototype = function UserApplicationIdentityManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { USER_APPLICATION_IDENTITY_UPDATE: handleUserApplicationIdentityGatewayEvent, USER_APPLICATION_IDENTITY_REMOVE: handleUserApplicationIdentityGatewayEvent };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default prototype;