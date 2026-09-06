// discord_app/modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import NotificationConstants from "../NotificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(
  friend_online_notifications,
) {
  const EnableFriendOnlineNotifications = UserSettings.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  const obj = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(
  notify_friends_on_come_online,
) {
  const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  const obj = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
