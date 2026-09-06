// === Module 17889: UserApplicationIdentityManager ===

// Module 17889 (UserApplicationIdentityManager)
import UserApplicationIdentityActionCreators from "UserApplicationIdentityActionCreators" /* 9024 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = UserApplicationIdentityActionCreators.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
let prototype = function UserApplicationIdentityManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { USER_APPLICATION_IDENTITY_UPDATE: handleUserApplicationIdentityGatewayEvent, USER_APPLICATION_IDENTITY_REMOVE: handleUserApplicationIdentityGatewayEvent };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default prototype;