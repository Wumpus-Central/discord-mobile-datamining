// === Module 11419: updateChannelUnreadSettings ===

// Module 11419 (updateChannelUnreadSettings)
import UserNotificationSettings from "UserNotificationSettings" /* 7114 */;
import _modDef7119 from "module_7119" /* 7119 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10150 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4741 */;
import { AnalyticsObjects } from "ME" /* 1074 */;
import { UnreadSetting } from "ReadStateTypes" /* 4742 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 1084 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = _modDef7119;
  obj = { flags: resetGuildUnreadFlags.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(closure_0, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};