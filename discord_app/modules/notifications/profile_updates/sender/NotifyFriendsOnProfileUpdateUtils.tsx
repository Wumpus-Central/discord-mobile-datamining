// discord_app/modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import AccountNotificationFlags from "../../NotificationConstants.tsx";
import explicitContentFromProto from "../../../user_settings/UserSettings.tsx";

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting(
  "modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx",
);

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(
  notify_friends_on_profile_update,
) {
  const NotifyFriendsOnProfileUpdate = explicitContentFromProto.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
