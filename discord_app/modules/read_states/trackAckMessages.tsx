import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
// discord_app/modules/read_states/trackAckMessages.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

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
    const mentionCount = updateGuildUnreadSentinel.getMentionCount(id.id);
    const hasUnreadResult = updateGuildUnreadSentinel.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + updateUserGuildSettingsInternal.isMuted(id.id) + "," + updateUserGuildSettingsInternal.resolveGuildUnreadSetting(id);
  });
  collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};