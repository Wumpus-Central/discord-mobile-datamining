// discord_app/modules/read_states/trackAckMessages.tsx
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  const channel = ChannelStore.getChannel(channel_id);
  const obj = { channel_id, guild_id: null, location: null, guild_unread_statuses: null };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  obj.location = location;
  const guildsArray = GuildStore.getGuildsArray();
  obj.guild_unread_statuses = guildsArray.map((id) => {
    const mentionCount = GuildReadStateStore.getMentionCount(id.id);
    const hasUnreadResult = GuildReadStateStore.hasUnread(id.id);
    return (
      "" +
      id.id +
      "," +
      hasUnreadResult +
      "," +
      mentionCount +
      "," +
      UserGuildSettingsStore.isMuted(id.id) +
      "," +
      UserGuildSettingsStore.resolveGuildUnreadSetting(id)
    );
  });
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
}
