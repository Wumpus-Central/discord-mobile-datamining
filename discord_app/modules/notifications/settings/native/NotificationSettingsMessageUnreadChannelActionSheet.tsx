// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
import closure_3 from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { ChannelNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { useChannelPresetSettings } from "../utils/notficationSettingsChannelFlagUtils.tsx";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx",
);

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  const _require = channel;
  let obj = useChannelPresetSettings;
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
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
    const result = obj.updateChannelOverrideSettings(
      channel.channel.guild_id,
      channel.channel.id,
      obj,
      NotificationLabel.unreads(ONLY_MENTIONS),
    );
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    value: unread,
    disabledMentionOnlyWithReason: null,
    onChange: null,
  });
}
