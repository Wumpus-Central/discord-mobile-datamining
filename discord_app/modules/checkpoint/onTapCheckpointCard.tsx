// === Module 13233: onTapCheckpointCard ===

// Module 13233 (onTapCheckpointCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5749 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6076 */;
import openCheckpoint from "openCheckpoint" /* 13234 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
const AnalyticEvents = fn(1084).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export function onTapCheckpointCard(arg0) {
  ({ message, authorId } = arg0);
  if (obj.getIsCheckpointEnabled("onTapCheckpointCard")) {
    const channel = ChannelStore.getChannel(message.channel_id);
    const obj3 = { other_user_id: authorId };
    const obj2 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    const tmpResult = AppAnalyticsUtils;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
    obj2.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj3);
    const tmpResult3 = AppAnalyticsUtils;
    openCheckpoint.openCheckpoint("message_component");
    const tmpResult4 = openCheckpoint;
  }
  obj = CheckpointExperiments;
}