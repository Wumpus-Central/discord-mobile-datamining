// === Module 17574: DeclarativeSystemNotifPermissionActionCreators ===

// Module 17574 (DeclarativeSystemNotifPermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 17572 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 17573 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 17571 */;

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