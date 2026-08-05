// discord_app/modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};