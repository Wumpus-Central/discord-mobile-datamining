// === Module 12953: onTapCheckpointCard ===

// Module 12953 (onTapCheckpointCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5711 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6037 */;
import openCheckpoint from "openCheckpoint" /* 12954 */;
import ChannelStore from "ChannelStore" /* 4823 */;

require = fn;
const AnalyticEvents = fn(1087).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(arg0) {
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
};