// === Module 19226: NotifSettingsProtoManager ===

// Module 19226 (NotifSettingsProtoManager)
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17609 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;

require = fn;
function handleConnectionRestored() {
  const result = NotifSettingsActionCreators.schedulePersistPendingEditsIfNeeded();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const result = NotifSettingsActionCreators.schedulePersistPendingEditsIfNeeded();
  }
}
const prototype = function NotifSettingsProtoManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handleConnectionRestored, CONNECTION_RESUMED: handleConnectionRestored, APP_STATE_UPDATE: handleAppStateUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoManager.tsx");

export default prototype1;