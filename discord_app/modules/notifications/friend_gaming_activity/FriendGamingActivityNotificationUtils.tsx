// discord_app/modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import NotificationConstants from "../NotificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx",
);

export const onFriendGamingActivityNotificationSettingsChanged =
  function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
    const EnableFriendGamingActivityNotifications = UserSettings.EnableFriendGamingActivityNotifications;
    EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
    const obj = { update_type: constants.ACCOUNT, friend_gaming_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  };
