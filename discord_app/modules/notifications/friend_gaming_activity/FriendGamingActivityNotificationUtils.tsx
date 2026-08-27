// === Module 15050: onFriendGamingActivityNotificationSettingsChanged ===

// Module 15050 (onFriendGamingActivityNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4101 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = explicitContentFromProto.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};