// === Module 6820: trackAckMessages ===

// Module 6820 (trackAckMessages)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5712 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6816 */;
import GuildStore from "GuildStore" /* 4846 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6705 */;

require = fn;
const AnalyticEvents = fn(1084).AnalyticEvents;
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