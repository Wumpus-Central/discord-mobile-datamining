// discord_app/modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import NotificationConstants from "../NotificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateUtils.tsx",
);

export function onNotifyFriendsOnCustomStatusUpdateSettingsChanged(notify_friends_on_custom_status_update) {
  const NotifyFriendsOnCustomStatusUpdate = UserSettings.NotifyFriendsOnCustomStatusUpdate;
  NotifyFriendsOnCustomStatusUpdate.updateSetting(notify_friends_on_custom_status_update);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: constants.ACCOUNT,
    notify_friends_on_custom_status_update,
  });
}
