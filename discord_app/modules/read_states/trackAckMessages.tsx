// === Module 13065: trackAckMessages ===

// Module 13065 (trackAckMessages)
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

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
  obj[3] = guildsArray.map((item, index) => {
    const mentionCount = closure_3.getMentionCount(item.id);
    const hasUnreadResult = closure_3.hasUnread(item.id);
    return "" + item.id + "," + hasUnreadResult + "," + mentionCount + "," + closure_5.isMuted(item.id) + "," + closure_5.resolveGuildUnreadSetting(item);
  });
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};