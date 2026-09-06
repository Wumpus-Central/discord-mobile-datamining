// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsFlagUtils from "../utils/notificationSettingsFlagUtils.tsx";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4742).UnreadSetting;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx",
);

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
  }
  obj.disabledMentionOnlyWithReason = stringResult;
  obj.onChange = function onChange(toggleExpandedHistory) {
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = NotificationSettingsModalActionCreatorsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    obj = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateChannelOverrideSettings(
      channel.channel.guild_id,
      channel.channel.id,
      obj,
      NotificationLabel.unreads(toggleExpandedHistory),
    );
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    value: unread,
    disabledMentionOnlyWithReason: null,
    onChange: null,
  });
}
