// discord_app/modules/read_states/trackAckMessages.tsx
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import updateGuildUnreadSentinel from "../../stores/GuildReadStateStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

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