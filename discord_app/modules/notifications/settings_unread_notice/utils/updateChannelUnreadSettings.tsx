// === Module 10632: updateChannelUnreadSettings ===

// Module 10632 (updateChannelUnreadSettings)
import UserNotificationSettings from "UserNotificationSettings" /* 6795 */;
import _modDef6798 from "module_6798" /* 6798 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10091 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { AnalyticsObjects } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = { flags: resetGuildUnreadFlags.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(closure_0, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};