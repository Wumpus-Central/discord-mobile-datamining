// discord_app/modules/go_live/GoLiveNotificationUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import AccountNotificationFlags from "../notifications/NotificationConstants.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const result = set.fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = explicitContentFromProto.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};