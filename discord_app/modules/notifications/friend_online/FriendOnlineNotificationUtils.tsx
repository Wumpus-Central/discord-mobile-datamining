// === Module 14811: onFriendOnlineNotificationSettingsChanged ===

// Module 14811 (onFriendOnlineNotificationSettingsChanged)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationUtils.tsx");

export const onFriendOnlineNotificationSettingsChanged = function onFriendOnlineNotificationSettingsChanged(friend_online_notifications) {
  const EnableFriendOnlineNotifications = explicitContentFromProto.EnableFriendOnlineNotifications;
  EnableFriendOnlineNotifications.updateSetting(friend_online_notifications);
  const obj = { update_type: constants.ACCOUNT, friend_online_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export const onNotifyFriendsOnComeOnlineSettingsChanged = function onNotifyFriendsOnComeOnlineSettingsChanged(notify_friends_on_come_online) {
  const NotifyFriendsOnComeOnline = explicitContentFromProto.NotifyFriendsOnComeOnline;
  NotifyFriendsOnComeOnline.updateSetting(notify_friends_on_come_online);
  const obj = { update_type: constants.ACCOUNT, notify_friends_on_come_online };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};