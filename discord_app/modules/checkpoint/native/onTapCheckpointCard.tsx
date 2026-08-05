// discord_app/modules/checkpoint/native/onTapCheckpointCard.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../../app_analytics/AppAnalyticsUtils.tsx";

const require = arg1;
const result = require("expandEventProperties").fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  channel = channel.getChannel(message.message.channel_id);
  let obj = expandEventProperties;
  obj = { other_user_id: message.authorId };
  const merged = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(channel));
  const obj3 = collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};