// discord_app/modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = expandEventProperties;
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};