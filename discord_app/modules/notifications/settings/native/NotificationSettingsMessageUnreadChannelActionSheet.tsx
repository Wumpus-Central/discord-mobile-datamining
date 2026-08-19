// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef6798 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { ChannelNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { useChannelPresetSettings } from "../utils/notficationSettingsChannelFlagUtils.tsx";

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  const _require = channel;
  let obj = useChannelPresetSettings;
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