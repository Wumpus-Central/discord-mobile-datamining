// === Module 16127: DeclarativeSystemNotifPermissionActionCreators ===

// Module 16127 (DeclarativeSystemNotifPermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16129 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16130 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16128 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx");

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(notification_settings_screen) {
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    DispatcherDefault.dispatch(result);
    const tmpResult = DispatcherDefault;
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, notification_settings_screen);
  }
};