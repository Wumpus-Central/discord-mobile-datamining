// === Module 10538: updateChannelUnreadSettings ===

// Module 10538 (updateChannelUnreadSettings)
import UserNotificationSettings from "UserNotificationSettings" /* 5429 */;
import _modDef5434 from "module_5434" /* 5434 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10049 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4653 */;
import { AnalyticsObjects } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 4654 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = _modDef5434;
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