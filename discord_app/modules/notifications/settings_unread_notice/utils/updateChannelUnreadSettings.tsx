// discord_app/modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx
import UserNotificationSettings from "../../../../utils/NotificationSettingsUtils.tsx";
import _modDef5495 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import resetGuildUnreadFlags from "../../settings/utils/notificationSettingsFlagUtils.tsx";
import closure_3 from "../../../../stores/UserGuildSettingsStore.tsx";
import { AnalyticsObjects } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { ChannelNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx",
);

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = _modDef5495;
  obj = {
    flags: resetGuildUnreadFlags.withChannelUnreadFlags(
      channelIdFlags.getChannelIdFlags(closure_0, id),
      UNREADS_ONLY_MENTIONS,
    ),
  };
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
}
