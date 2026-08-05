// discord_app/modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  let obj = expandEventProperties;
  obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};