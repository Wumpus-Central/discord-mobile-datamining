// === Module 11939: onTapCheckpointCard ===

// Module 11939 (onTapCheckpointCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  const channel = ChannelStore.getChannel(message.message.channel_id);
  const obj = { other_user_id: message.authorId };
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};