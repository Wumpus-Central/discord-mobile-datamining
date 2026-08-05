// discord_app/modules/premium/FriendAnniversaryNotificationUtils.tsx
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = require("../user_settings/UserSettings.tsx") /* explicitContentFromProto */.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};