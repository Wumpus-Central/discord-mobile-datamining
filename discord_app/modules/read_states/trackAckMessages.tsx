// === Module 13065: trackAckMessages ===

// Module 13065 (trackAckMessages)
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "updateGuildUnreadSentinel" /* 5383 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "updateUserGuildSettingsInternal" /* 5043 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id) {
  channel = channel.getChannel(channel_id);
  const obj = { channel_id, guild_id: null, location: null, guild_unread_statuses: null };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj[1] = guildId;
  obj[2] = arg1;
  guildsArray = guildsArray.getGuildsArray();
  obj[3] = guildsArray.map((id) => {
    const mentionCount = closure_3.getMentionCount(id.id);
    const hasUnreadResult = closure_3.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + closure_5.isMuted(id.id) + "," + closure_5.resolveGuildUnreadSetting(id);
  });
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};