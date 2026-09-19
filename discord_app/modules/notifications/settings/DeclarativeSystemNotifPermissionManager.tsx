// === Module 17749: DeclarativeSystemNotifPermissionManager ===

// Module 17749 (DeclarativeSystemNotifPermissionManager)
import DeclarativeSystemNotifPermissionActionCreators from "DeclarativeSystemNotifPermissionActionCreators" /* 16239 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7358 */;

require = fn;
function handleAppStateChanged(state) {
  if ("active" === state.state) {
    const result = DeclarativeSystemNotifPermissionActionCreators.refreshSystemNotifPermissionsAsync("app_state_active");
  }
}
const prototype = function DeclarativeSystemNotifPermissionManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { APP_STATE_UPDATE: handleAppStateChanged };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionManager.tsx");

export default prototype1;