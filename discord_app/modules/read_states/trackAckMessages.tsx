// === Module 6769: trackAckMessages ===

// Module 6769 (trackAckMessages)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5673 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6765 */;
import GuildStore from "GuildStore" /* 4822 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6655 */;

require = fn;
const AnalyticEvents = fn(1087).AnalyticEvents;
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