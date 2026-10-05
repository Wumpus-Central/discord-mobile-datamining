// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics.tsx";
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting(
  "modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx",
);

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(
  notification_settings_screen,
) {
  const obj = DeclarativeSystemNotifPermissionHelpersDefault;
  const result = obj.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(result);
    const obj3 = DeclarativeSystemNotifPermissionAnalytics;
    const result1 = obj3.trackSystemNotifSettingsReenabled(
      disabledSettings,
      result.disabledSettings,
      notification_settings_screen,
    );
  }
};
