// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics.tsx";
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx",
);

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(app_state_active) {
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    DispatcherDefault.dispatch(result);
    const tmpResult = DispatcherDefault;
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(
      disabledSettings,
      result.disabledSettings,
      app_state_active,
    );
  }
};
