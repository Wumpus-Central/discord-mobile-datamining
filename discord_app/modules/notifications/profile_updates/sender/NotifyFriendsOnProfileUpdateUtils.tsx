// discord_app/modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import NotificationConstants from "../../NotificationConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx",
);

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(
  notify_friends_on_profile_update,
) {
  const NotifyFriendsOnProfileUpdate = UserSettings.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  const obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
