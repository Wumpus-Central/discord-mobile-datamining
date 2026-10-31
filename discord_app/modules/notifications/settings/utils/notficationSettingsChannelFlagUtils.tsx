// discord_app/modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const UnreadSetting = fn(6776).UnreadSetting;
const constants = fn(1082).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj2 = { guildId: guild_id, channelId: id, settings: null, label: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj2.settings = {
    flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS),
  };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.unreads(ALL_MESSAGES);
  const result = obj.updateChannelOverrideSettings(obj2);
  const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
}
