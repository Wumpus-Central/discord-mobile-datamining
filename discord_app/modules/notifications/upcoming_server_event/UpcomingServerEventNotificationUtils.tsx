// discord_app/modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import NotificationConstants from "../NotificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx",
);

export const onUpcomingServerEventNotificationSettingsChanged =
  function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
    const EnableUpcomingServerEventNotifications = UserSettings.EnableUpcomingServerEventNotifications;
    EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
    const obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  };
