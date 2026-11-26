// === Module 17631: DeclarativeSystemNotifPermissionActionCreators ===

// Module 17631 (DeclarativeSystemNotifPermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17629 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17630 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17628 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx");

export function refreshSystemNotifPermissionsAsync(app_state_active) {
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    DispatcherDefault.dispatch(result);
    const tmpResult = DispatcherDefault;
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, app_state_active);
  }
}