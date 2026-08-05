// discord_app/modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(friend_online_notifications) {
  const EnableFriendOnlineNotifications = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(notify_friends_on_come_online) {
  const NotifyFriendsOnComeOnline = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};