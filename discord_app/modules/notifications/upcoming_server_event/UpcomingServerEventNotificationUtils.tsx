// discord_app/modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  let obj = expandEventProperties;
  obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};