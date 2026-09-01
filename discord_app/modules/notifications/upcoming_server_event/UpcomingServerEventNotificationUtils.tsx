// discord_app/modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import AccountNotificationFlags from "../NotificationConstants.tsx";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting(
  "modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx",
);

export const onUpcomingServerEventNotificationSettingsChanged =
  function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
    const EnableUpcomingServerEventNotifications = explicitContentFromProto.EnableUpcomingServerEventNotifications;
    EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
    let obj = expandEventPropertiesDefault;
    obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  };
