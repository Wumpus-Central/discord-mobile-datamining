// discord_app/modules/user_application_identity/UserApplicationIdentityManager.tsx
import UserApplicationIdentityActionCreators from "UserApplicationIdentityActionCreators.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = UserApplicationIdentityActionCreators.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
class UserApplicationIdentityManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      USER_APPLICATION_IDENTITY_UPDATE: handleUserApplicationIdentityGatewayEvent,
      USER_APPLICATION_IDENTITY_REMOVE: handleUserApplicationIdentityGatewayEvent,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const userApplicationIdentityManager = new UserApplicationIdentityManager();
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default userApplicationIdentityManager;
