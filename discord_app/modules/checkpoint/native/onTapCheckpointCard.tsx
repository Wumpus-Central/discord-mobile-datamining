// === Module 11125: onTapCheckpointCard ===

// Module 11125 (onTapCheckpointCard)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  channel = channel.getChannel(message.message.channel_id);
  const obj = { other_user_id: message.authorId };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel));
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};