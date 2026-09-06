// discord_app/modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import NotificationConstants from "../NotificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export const onProfileUpdatesNotificationSettingsChanged = function onProfileUpdatesNotificationSettingsChanged(
  profile_updates_notifications,
) {
  const EnableProfileUpdatesNotifications = UserSettings.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  const obj = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
