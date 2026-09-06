// discord_app/modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx
import Constants from "../../../../Constants.tsx";
import RouteUtils from "../../../routing/RouteUtils.tsx";
import Clickstream from "../../clickstream/Clickstream.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    let obj = RouteUtils;
    isPseudoGuildIdResult = obj.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    obj = { guild_id: guildId };
    Clickstream.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj);
  }
}
