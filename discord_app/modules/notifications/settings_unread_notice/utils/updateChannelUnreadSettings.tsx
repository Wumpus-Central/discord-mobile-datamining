// === Module 11277: updateChannelUnreadSettings ===

// Module 11277 (updateChannelUnreadSettings)
import UserNotificationSettings from "UserNotificationSettings" /* 5491 */;
import _modDef5496 from "module_5496" /* 5496 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10259 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4702 */;
import { AnalyticsObjects } from "ME" /* 673 */;
import { UnreadSetting } from "ReadStateTypes" /* 4703 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 682 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = _modDef5496;
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