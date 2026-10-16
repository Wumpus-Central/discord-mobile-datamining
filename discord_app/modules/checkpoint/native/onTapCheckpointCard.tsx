// discord_app/modules/checkpoint/native/onTapCheckpointCard.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import CheckpointExperiments from "../CheckpointExperiments.tsx";
import openCheckpointModalDefault from "components/openCheckpointModal.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

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
    openCheckpointModalDefault("message_component");
    const tmpResult2 = AppAnalyticsUtils;
  }
  obj = CheckpointExperiments;
};
