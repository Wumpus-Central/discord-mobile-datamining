// === Module 10253: NotificationSettingsMessageUnreadChannelActionSheet ===

// Module 10253 (NotificationSettingsMessageUnreadChannelActionSheet)
import noopAll from "noop" /* 19 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10252 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4701 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 4702 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10232);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj[1] = stringResult;
  obj[2] = function onChange(ONLY_MENTIONS) {
    const channelIdFlags = closure_1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = closure_1_1(closure_1_2[9]);
    if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
    }
    obj = { flags: channel(closure_1_2[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = channel(closure_1_2[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: null, onChange: null });
};