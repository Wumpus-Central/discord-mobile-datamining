// === Module 14807: onFriendAnniversaryNotificationSettingsChanged ===

// Module 14807 (onFriendAnniversaryNotificationSettingsChanged)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const result = obj132.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = explicitContentFromProto.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  const obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};