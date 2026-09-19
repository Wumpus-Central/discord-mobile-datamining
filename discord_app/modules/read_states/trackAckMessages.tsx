// === Module 14101: trackAckMessages ===

// Module 14101 (trackAckMessages)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7870 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;

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
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + UserGuildSettingsStore.isMuted(id.id) + "," + UserGuildSettingsStore.resolveGuildUnreadSetting(id);
  });
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};