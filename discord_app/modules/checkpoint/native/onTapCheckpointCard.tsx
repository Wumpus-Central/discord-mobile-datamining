// discord_app/modules/checkpoint/native/onTapCheckpointCard.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import collectGuildAnalyticsMetadata from "../../app_analytics/AppAnalyticsUtils.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

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