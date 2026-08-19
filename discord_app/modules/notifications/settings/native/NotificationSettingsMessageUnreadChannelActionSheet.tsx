// === Module 10111: NotificationSettingsMessageUnreadChannelActionSheet ===

// Module 10111 (NotificationSettingsMessageUnreadChannelActionSheet)
import noopAll from "noop" /* 19 */;
import _modDef6798 from "module_6798" /* 6798 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10110 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10090);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj[1] = stringResult;
  obj[2] = function onChange(toggleExpandedHistory) {
    const channelIdFlags = closure_1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = _modDef6798;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
    }
    obj = { flags: channel(dependencyMap[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = channel(dependencyMap[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.unreads(toggleExpandedHistory));
    const obj2 = channel(dependencyMap[10]);
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: null, onChange: null });
};