// discord_app/modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import RouteParam from "../../../routing/RouteUtils.tsx";
import isClickstreamEnabled from "../../clickstream/Clickstream.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    let obj = RouteParam;
    isPseudoGuildIdResult = obj.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    obj = { guild_id: null };
    obj[0] = guildId;
    isClickstreamEnabled.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj);
    const obj2 = isClickstreamEnabled;
  }
}
